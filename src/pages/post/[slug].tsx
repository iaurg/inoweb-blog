import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";

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
import FourOhFour from "@pages/404";

type Props = {
  post: PostType;
};

const BreadCrumb = ({ post }) => {
  return (
    <nav className="flex justify-center" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Início
            </a>
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"></path>
            </svg>
            <Link href={`/${post.category}`}>
              <a className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white capitalize">
                {post.category}
              </a>
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"></path>
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              {post.title}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <FourOhFour />;
  }

  return (
    <>
      {post && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${post.title} - ${siteConfig.title}`}
            description={post.excerpt || ""}
            canonical={`${siteConfig?.url}/${post.category}/${post.slug}`}
            openGraph={{
              url: `${siteConfig?.url}/post/${post.slug}`,
              title: `${post.title} - ${siteConfig.title}`,
              description: post.excerpt || "",
              images: [
                {
                  url: `${process.env.NEXT_PUBLIC_OG_SERVER_URL}/api/og?title=${post.title}&category=${post.category}&author=${post.author.name}`,
                  width: 800,
                  height: 600,
                  alt: `${post.title} - ${siteConfig.title}`
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
                <BreadCrumb post={post} />
                <CategoryLabel category={post.category} />
              </div>

              <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                {post.title}
              </h1>

              <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0 w-10 h-10">
                    {post.author.picture && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_OG_SERVER_URL}${post.author.picture}`}
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

          <div className="relative z-0 max-w-screen-md mx-auto lg:rounded-lg aspect-video">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={`${process.env.NEXT_PUBLIC_OG_SERVER_URL}/api/og?title=${post.title}&category=${post.category}`}
              alt={post.title || "Thumbnail"}
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
    "coverImage",
    "category"
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
