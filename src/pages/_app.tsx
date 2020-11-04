import Header from "../Components/Layout/Header";
import type { AppProps } from "next/app";
import "../scss/styles.scss";
// import "react-bulma-components/dist/react-bulma-components.min.css";
import Layout from "../Components/Layout/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Header></Header>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </div>
  );
}

export default MyApp;
