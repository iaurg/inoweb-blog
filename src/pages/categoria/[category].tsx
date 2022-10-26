import Layout from "@components/layout";
import Container from "@components/container";

import PostType from "@customTypes/post";

type Props = {
  post: PostType;
};

export default function Category() {
  return (
    <>
      <Layout>
        <Container className="!pt-0">Categoria</Container>
      </Layout>
    </>
  );
}
