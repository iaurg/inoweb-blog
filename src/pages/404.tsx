import Container from "@components/container";
import Layout from "@components/layout";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col justify-center items-center">
          <div className="text-pink-500 font-bold text-2xl">404</div>
          <p className="text-lg py-8 dark:text-white">
            Página não encontrada
          </p>
          <Link href="/">
            <a className=" bg-pink-500 text-white px-4 py-2 rounded-lg">
              Voltar para a página inicial
            </a>
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
