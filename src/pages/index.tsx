import { NextSeo } from "next-seo";
import { siteConfig } from "@utils/siteConfig";
import Layout from "@components/layout";
import Container from "@components/container";
import { getAllPosts } from "@lib/api";
import Post from "@customTypes/post";
import PostList from "@components/postlist";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <NextSeo
        title={`${siteConfig.title}`}
        description={siteConfig.description}
        canonical={siteConfig.url}
        openGraph={{
          url: siteConfig.url,
          title: `${siteConfig?.title}`,
          description: siteConfig?.description,
          images: [
            {
              url: siteConfig.ogImage,
              width: 800,
              height: 600,
              alt: ""
            }
          ],
          site_name: siteConfig.siteName
        }}
        twitter={{
          cardType: "summary_large_image"
        }}
      />
      <Container>
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          {allPosts.slice(0, 2).map(post => (
            <PostList
              key={post.slug}
              post={post}
              aspect="landscape"
            />
          ))}
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {allPosts.slice(2).map(post => (
            <PostList key={post.slug} post={post} aspect="square" />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "category",
    "tags"
  ]);

  console.log(allPosts);

  return {
    props: { allPosts }
  };
};
