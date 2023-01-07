import type { AppProps } from "next/app";
import GlobalLayout from "../src/layout/GlobalLayout/GlobalLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps | any) {
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => <GlobalLayout>{page}</GlobalLayout>);

  return getLayout(<Component {...pageProps} />);
}
