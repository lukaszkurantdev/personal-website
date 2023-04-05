import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DEFAULT_NAMESPACES = ["common", "cookies"];

export const getServerSideTranslations = async (
  locale: string,
  namespaces: string[] = []
) => {
  return await serverSideTranslations(locale, [
    ...DEFAULT_NAMESPACES,
    ...namespaces,
  ]);
};
