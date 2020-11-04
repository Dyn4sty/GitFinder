import Header from "../Components/Layout/Header";
import type { AppProps } from "next/app";
import "../scss/styles.scss";
import Layout from "../Components/Layout/Layout";
import Head from "next/head";
import { FC } from "react";
import { getTitle } from "../constants/routes.constants";

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <div>
      <Head>
        <title>{getTitle(router.pathname)}</title>
      </Head>
      <Header></Header>
      <Layout>
        <Component {...pageProps} key={router.route} path={router.pathname} />
      </Layout>
    </div>
  );
};

export default MyApp;
