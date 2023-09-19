import Head from "next/head";

import type { ServerSideProps } from "@/types/ServerSideProps";
import { getServerSideTranslations } from "@/utils/serverSideTranslations";

export default function FedCsis() {
  return (
    <div>
      <Head>
        <title>FedCSIS</title>
      </Head>

      <div>
        <a href="https://1drv.ms/b/s!Ai0gqw1uJbIMgoYaR453gE0zkjkOew?e=ehoY81">
          Presentation
        </a>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: ServerSideProps) {
  const translations = await getServerSideTranslations(locale, ["cookies"]);

  return {
    props: {
      ...translations,
    },
  };
}
