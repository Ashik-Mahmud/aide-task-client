import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import GlobalLayout from "../src/layout/GlobalLayout/GlobalLayout";
import "../styles/globals.css";
import "../styles/style.scss";

export default function App({ Component, pageProps }: AppProps | any) {
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => <GlobalLayout>{page}</GlobalLayout>);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
