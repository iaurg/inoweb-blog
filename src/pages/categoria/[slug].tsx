import Layout from "@components/layout";
import Container from "@components/container";

import PostType from "@customTypes/post";
import { getPostsByCategory } from "@lib/api";
import PostList from "@components/postlist";
import FourOhFour from "@pages/404";

type Props = {
  posts: PostType[];
};

export default function Category({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return <FourOhFour />;
  }

  return (
    <Layout>
      <Container>
        <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          {posts.slice(0, 2).map(post => (
            <PostList
              key={post.slug}
              post={post}
              aspect="landscape"
            />
          ))}
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {posts.slice(2).map(post => (
            <PostList key={post.slug} post={post} aspect="square" />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const posts = getPostsByCategory(
    [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
      "category",
      "seoTitle",
      "seoDescription",
      "tags"
    ],
    params.slug
  );

  return {
    props: { posts }
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}
