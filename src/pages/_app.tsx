import GlobalStyles from "@/styles/GlobalStyles";
import "@/styles/default.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemeProvider } from "next-themes";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark">
      <GlobalStyles />
      <Component {...pageProps} />
    </NextThemeProvider>
  );
}
