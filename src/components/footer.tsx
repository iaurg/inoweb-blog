import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        <div className="mb-4">
          <ThemeSwitch />
        </div>
        Copyright © {new Date().getFullYear()} {props?.copyright}.
        Todos os direitos reservados.
      </div>
    </Container>
  );
}
