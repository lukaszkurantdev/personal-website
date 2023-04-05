import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import Head from "next/head";
import classNames from "classnames";

import styles from "./styles.module.css";

import { Lato } from "@next/font/google";
import { Navbar } from "@/modules/layout/Navbar/NavBar";
import { Footer } from "@/modules/layout/Footer/Footer";

const latoFont = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation("common", { keyPrefix: "meta" });

  return (
    <>
      <Head>
        <meta name="description" content={t<string>("description")}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={t<string>("ogUrl")} />
        <meta property="og:locale" content={t<string>("ogLocale")} />
        <meta property="og:type" content={t<string>("ogType")}></meta>
        <meta property="og:title" content={t<string>("ogTitle")} />
        <meta property="og:description" content={t<string>("ogDescription")} />
        <meta property="og:image" content={t<string>("ogImage")} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content={t<string>("description")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@handle" />
        <link rel="canonical" href={t<string>("ogUrl")} />
      </Head>

      <main className={classNames(styles.main, latoFont.className)}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default appWithTranslation(MyApp);
