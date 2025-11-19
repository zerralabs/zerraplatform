import { Metadata } from "next";
import { SiteSettings } from "./settings";

const SEO_CONFIG: Metadata = {
  title: {
    template: `%s | ${SiteSettings.name}`,
    default: "ZerraLabs - Innovation Platform",
  },
  description:
    "ZerraLabs - Building the future, one innovation at a time.",
  keywords:
    "zerralabs, innovation, technology, platform, solutions",
  icons: "/static/logo.png",
  openGraph: {
    type: "website",
    siteName: "ZerraLabs",
    locale: "en_US",
    url: "https://zerralabs.com",
    title: "ZerraLabs - Innovation Platform",
    description:
      "ZerraLabs - Building the future, one innovation at a time.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZerraLabs - Innovation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zerralabs",
    title: "ZerraLabs - Innovation Platform",
    description:
      "ZerraLabs - Building the future, one innovation at a time.",
    images: ["/og-image.jpg"],
  },
};

export default SEO_CONFIG;
