import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
// import Subpagehero from "@components/sections/subpagehero";
// import Categories from "@components/categories";

import PostList from "@components/postlist";
import { siteConfig } from "@utils/siteConfig";
import { getAllPosts } from "@lib/api";
import PostType from "@customTypes/post";

type Props = {
  allPosts: PostType[];
};

export default function Post({ allPosts }: Props) {
  return (
    <>
      {allPosts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`Blog — ${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `Blog — ${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [
                {
                  url: siteConfig.ogImage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "inoweb"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <Container>
            <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              Arquivos
            </h1>
            <div className="text-center">
              <p className="mt-2 text-lg">
                Veja todos os posts que já escrevemos.
              </p>
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {allPosts.map(post => (
                <PostList
                  key={post.slug}
                  post={post}
                  aspect="square"
                  preloadImage={true}
                />
              ))}
            </div>
          </Container>
        </Layout>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt"
  ]);

  return {
    props: { allPosts }
  };
};
