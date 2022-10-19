import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../css/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
