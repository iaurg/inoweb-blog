import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";

import ErrorPage from "next/error";
import { parseISO, format } from "date-fns";
import locale from "date-fns/locale/pt-BR";
import { NextSeo } from "next-seo";

import CategoryLabel from "@components/blog/category";
import AuthorCard from "@components/blog/authorCard";
import { getAllPosts, getPostBySlug } from "@lib/api";
import PostType from "@customTypes/post";
import { siteConfig } from "@utils/siteConfig";
import markdownToHtml from "@lib/markdownToHtml";
import PostBody from "@components/post/postBody";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const imageProps = null;

  const AuthorimageProps = null;

  const ogimage = null;

  return (
    <>
      {post && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${post.title} - ${siteConfig.title}`}
            description={post.excerpt || ""}
            canonical={`${siteConfig?.url}/post/${post.slug}`}
            openGraph={{
              url: `${siteConfig?.url}/post/${post.slug}`,
              title: `${post.title} - ${siteConfig.title}`,
              description: post.excerpt || "",
              images: [
                {
                  url: "",
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: siteConfig.title
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />

          <Container className="!pt-0">
            <div className="max-w-screen-md mx-auto ">
              <div className="text-center">
                <CategoryLabel categories={post.categories} />
              </div>

              <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                {post.title}
              </h1>

              <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0 w-10 h-10">
                    {post.author.picture && (
                      <Image
                        src={post.author.picture}
                        objectFit="cover"
                        layout="fill"
                        alt={post?.author?.name}
                        sizes="80px"
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-gray-400">
                      {post.author.name}
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <time
                        className="text-gray-500 dark:text-gray-400"
                        dateTime={post?.date}>
                        {format(
                          parseISO(post?.date),
                          "dd MMMM, yyyy",
                          { locale }
                        )}
                      </time>
                      <span>
                        · {post.estReadingTime || "5"} min para ler
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
            <Image
              src={`${process.env.NEXT_PUBLIC_OG_SERVER_URL}/api/og?title=${post.title}`}
              alt={post.title || "Thumbnail"}
              layout="fill"
            />
          </div>

          <Container>
            <article className="max-w-screen-md mx-auto ">
              <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
                <PostBody content={post.content} />
              </div>
              <div className="flex justify-center mt-7 mb-7">
                <Link href="/">
                  <a className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                    ← Ver todos os posts
                  </a>
                </Link>
              </div>
              {post.author && <AuthorCard author={post.author} />}
            </article>
          </Container>
        </Layout>
      )}
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mt-12 mb-12 ">
      <Image src="" alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage"
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
