import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DATA } from "./data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const NAME = DATA.profile.name;
const ROLE = DATA.profile.role;
const LOCATION = DATA.profile.location;
const BIO = DATA.profile.bio;
// Production domain
const DOMAIN = "https://www.vincentpacana.com";
const PROFILE_IMAGE = "images/personal/2x2.jpg";
const TECH = DATA.skills.techStack;
const TECH_1 = TECH[0];
const TECH_2 = TECH[1];
const TECH_3 = TECH[2];
const GITHUB_URL =
  DATA.contact.socials.find((s) => s.name === "GitHub")?.link ??
  "https://github.com/beansint";
const LINKEDIN_URL =
  DATA.contact.socials.find((s) => s.name === "LinkedIn")?.link ??
  "https://linkedin.com/in/vincentpacanab";

// Top projects for the ItemList rich result, with a resolved public URL.
const featuredProjects = DATA.projects
  .map((p) => ({ ...p, url: p.link || p.github || "" }))
  .filter((p) => p.url)
  .slice(0, 3);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${DOMAIN}/#profilepage`,
      url: `${DOMAIN}/`,
      name: `${NAME} - ${ROLE} | Portfolio`,
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        name: `${NAME} Portfolio`,
        url: `${DOMAIN}/`,
      },
      mainEntity: {
        "@type": "Person",
        "@id": `${DOMAIN}/#person`,
        name: NAME,
        givenName: NAME.split(" ")[0],
        familyName: NAME.split(" ").slice(1).join(" "),
        jobTitle: ROLE,
        description: BIO,
        url: DOMAIN,
        email: `mailto:${DATA.contact.email}`,
        image: {
          "@type": "ImageObject",
          url: `${DOMAIN}/${PROFILE_IMAGE}`,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cebu City",
          addressCountry: "PH",
        },
        knowsAbout: TECH,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Cebu Institute of Technology - University",
        },
        sameAs: [GITHUB_URL, LINKEDIN_URL],
      },
    },
    {
      "@type": "ItemList",
      itemListElement: featuredProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.title,
          description: project.description,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          url: project.url,
        },
      })),
    },
  ],
};

const DESCRIPTION = `${NAME} is a ${ROLE} based in ${LOCATION}. Specializing in ${TECH_1}, ${TECH_2}, and ${TECH_3}. View projects and contact details.`;

export const metadata: Metadata = {
  title: `${NAME} - ${ROLE} | Portfolio`,
  description: DESCRIPTION,
  metadataBase: new URL(DOMAIN),
  alternates: { canonical: "/" },
  authors: [{ name: NAME }],
  creator: NAME,
  keywords: [
    NAME,
    ROLE,
    LOCATION,
    "Portfolio",
    TECH_1,
    TECH_2,
    TECH_3,
    "Software Engineer",
    "Web Developer",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: `${DOMAIN}/`,
    title: `${NAME} - ${ROLE} | Portfolio`,
    description: BIO,
    siteName: `${NAME} Portfolio`,
    firstName: NAME.split(" ")[0],
    lastName: NAME.split(" ").slice(1).join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} - ${ROLE} | Portfolio`,
    description: BIO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
      </body>
    </html>
  );
}
