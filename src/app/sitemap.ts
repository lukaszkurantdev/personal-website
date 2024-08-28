import { Links } from "@/constants/Links";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import type { MetadataRoute } from "next";

const linksInSiteMap = [
  Links.About,
  Links.Blog,
  Links.Contact,
  Links.Experience,
  Links.Activities,
];

const defaultItems: MetadataRoute.Sitemap = linksInSiteMap.map((link) => ({
  url: `https://lukaszkurant.com${link}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 1,
}));

const portfolioItems: MetadataRoute.Sitemap = PORTFOLIO_DATA.map((item) => ({
  url: `https://lukaszkurant.com/portfolio/${item.slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...defaultItems, ...portfolioItems];
}
