import { Metadata } from "next";
import { SiteSettings } from "./settings";

const SEO_CONFIG: Metadata = {
  title: {
    template: `%s | ${SiteSettings.name}`,
    default: "ZerraLabs - AI Product Phtography",
  },
  description:
    "ZerraLabs - Create studio quality products photos with simple photos using AI",
  keywords:
    "zerralabs, innovation, technology, platform, solutions",
  icons: "/static/logo.png",
  openGraph: {
    type: "website",
    siteName: "ZerraLabs",
    locale: "en_US",
    url: "https://zerralabs.com",
    title: "ZerraLabs",
    description:
      "ZerraLabs - Create studio quality products photos with simple photos using AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZerraLabs - Create studio quality products photos with simple photos using AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zerralabs",
    title: "ZerraLabs",
    description:
      "ZerraLabs - Create studio quality products photos with simple photos using AI",
    images: ["/og-image.jpg"],
  },
};

export default SEO_CONFIG;
