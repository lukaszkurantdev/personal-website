import Head from "next/head";
import Image from "next/image";
import { Lato } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/Button/Button";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Navbar } from "@/modules/layout/Navbar/NavBar";
import classNames from "classnames";
import localFont from "@next/font/local";
import { HeroSection } from "@/modules/home/HeroSection/HeroSection";
import { AboutSection } from "@/modules/home/AboutSection/AboutSection";
import { ValuesSection } from "@/modules/home/ValuesSection/ValuesSection";
import { SpecialtiesSection } from "@/modules/home/SpecialtiesSection/SpecialtiesSection";
import { ExperienceSection } from "@/modules/home/ExperienceSection/ExperienceSection";
import { EducationSection } from "@/modules/home/EducationSection/EducationSection";
import { ConstCashSection } from "@/modules/home/ConstCashSection/ConstCashSection";
import { ContactSection } from "@/modules/home/ContactSection/ContactSection";
import { BlogSection } from "@/modules/home/BlogSection/BlogSection";
import { Footer } from "@/modules/layout/Footer/Footer";

const latoFont = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>

        <HeroSection />
        {/* <AboutSection /> */}
        <SpecialtiesSection />
        <ValuesSection />
       
       {/* <div style={{display: "flex", columnGap: 100, maxWidth: 1200, margin:'0 auto', marginTop: 50}}> */}
       <ExperienceSection />
        <EducationSection />
       {/* </div> */}
       
        <ConstCashSection />

        <BlogSection />
        <ContactSection />

      
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
