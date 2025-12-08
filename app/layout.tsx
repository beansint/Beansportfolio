import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
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

const NAME = "Vincent B. Pacaña";
const ROLE = "Full Stack Developer";
const LOCATION = "Cebu City, Philippines";
// Use a valid default to avoid runtime URL errors; replace with your real domain.
const DOMAIN = "https://example.com";
const PROFILE_IMAGE = "2x2.jpg";
const SHORT_BIO = "[SHORT_BIO]";
const TECH_1 = "[KEY_TECH_1]";
const TECH_2 = "[KEY_TECH_2]";
const TECH_3 = "[KEY_TECH_3]";
const GITHUB_URL = "https://github.com/beansint";
const LINKEDIN_URL = "https://linkedin.com/in/vincentpacanab";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: NAME,
      jobTitle: ROLE,
      url: DOMAIN,
      sameAs: [GITHUB_URL, LINKEDIN_URL],
      skills: [TECH_1, TECH_2, TECH_3],
    },
    {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "[PROJECT_1_NAME]",
            description: "[PROJECT_1_DESC]",
            applicationCategory: "WebApplication",
            url: "[PROJECT_1_URL]",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "[PROJECT_2_NAME]",
            description: "[PROJECT_2_DESC]",
            applicationCategory: "WebApplication",
            url: "[PROJECT_2_URL]",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "[PROJECT_3_NAME]",
            description: "[PROJECT_3_DESC]",
            applicationCategory: "WebApplication",
            url: "[PROJECT_3_URL]",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: `${NAME} - ${ROLE} | Portfolio`,
  description: `${NAME} is a ${ROLE} based in ${LOCATION}. Specializing in ${TECH_1}, ${TECH_2}, and ${TECH_3}. View projects and contact details.`,
  metadataBase: new URL(DOMAIN),
  alternates: { canonical: "/" },
  authors: [{ name: NAME }],
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
  openGraph: {
    type: "profile",
    url: DOMAIN,
    title: `${NAME} - ${ROLE} | Portfolio`,
    description: SHORT_BIO,
    images: [
      {
        url: `${DOMAIN}/${PROFILE_IMAGE}`,
        alt: `${NAME} profile image`,
      },
    ],
    siteName: `${NAME} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} - ${ROLE} | Portfolio`,
    description: SHORT_BIO,
    images: [`${DOMAIN}/${PROFILE_IMAGE}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{`${NAME} - ${ROLE} | Portfolio`}</title>
        <meta
          name="description"
          content={`${NAME} is a ${ROLE} based in ${LOCATION}. Specializing in ${TECH_1}, ${TECH_2}, and ${TECH_3}. View projects and contact details.`}
        />
        <meta
          name="keywords"
          content={`${NAME}, ${ROLE}, ${LOCATION}, Portfolio, ${TECH_1}, ${TECH_2}, ${TECH_3}, Software Engineer, Web Developer`}
        />
        <meta name="author" content={NAME} />
        <link rel="canonical" href={`${DOMAIN}/`} />

        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${DOMAIN}/`} />
        <meta
          property="og:title"
          content={`${NAME} - ${ROLE} | Portfolio`}
        />
        <meta property="og:description" content={SHORT_BIO} />
        <meta property="og:image" content={`${DOMAIN}/${PROFILE_IMAGE}`} />
        <meta property="profile:first_name" content={NAME.split(" ")[0] ?? ""} />
        <meta
          property="profile:last_name"
          content={NAME.split(" ").slice(1).join(" ")}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${NAME} - ${ROLE} | Portfolio`}
        />
        <meta name="twitter:description" content={SHORT_BIO} />
        <meta name="twitter:image" content={`${DOMAIN}/${PROFILE_IMAGE}`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
