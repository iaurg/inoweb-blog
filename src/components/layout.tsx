import React from "react";
import { NextSeo } from "next-seo";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import { siteConfig } from "@utils/siteConfig";

export default function Layout({ children }) {
  const ogimage = "";
  return (
    <>
      <NextSeo
        title={siteConfig.title}
        description={siteConfig.description}
        canonical={siteConfig.url}
        openGraph={{
          url: siteConfig.url,
          title: siteConfig.title,
          description: siteConfig.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: siteConfig.title
            }
          ],
          site_name: siteConfig.title
        }}
        twitter={{
          handle: "@surjithctly",
          site: "@surjithctly",
          cardType: "summary_large_image"
        }}
      />

      <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
