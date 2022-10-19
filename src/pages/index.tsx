import { NextSeo } from "next-seo";
import { siteConfig } from "@utils/siteConfig";
import Layout from "@components/layout";
import Container from "@components/container";

export default function Index() {
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
          oi
          {/*
          <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.slice(2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="square"
                />
              ))}
            </div>
           */}
        </div>
      </Container>
    </Layout>
  );
}
