import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DATA } from "./data";
import { SITE_URL } from "./site";
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
const DOMAIN = SITE_URL;
const PROFILE_IMAGE = "images/personal/2x2.jpg";
// First token is the given name; last token is the surname. Any middle
// token (e.g. the "B." initial) is intentionally excluded from familyName.
const NAME_PARTS = NAME.split(" ");
const GIVEN_NAME = NAME_PARTS[0];
const FAMILY_NAME = NAME_PARTS[NAME_PARTS.length - 1];
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

// All projects for the ItemList rich result, with a resolved public URL.
const featuredProjects = DATA.projects
  .map((p) => ({ ...p, url: p.link || p.github || "" }))
  .filter((p) => p.url);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${DOMAIN}/#profilepage`,
      url: DOMAIN,
      name: `${NAME} - ${ROLE} | Portfolio`,
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        name: `${NAME} Portfolio`,
        url: DOMAIN,
      },
      mainEntity: {
        "@type": "Person",
        "@id": `${DOMAIN}/#person`,
        name: NAME,
        givenName: GIVEN_NAME,
        familyName: FAMILY_NAME,
        jobTitle: ROLE,
        description: DATA.profile.summary,
        disambiguatingDescription: DATA.profile.summary,
        url: DOMAIN,
        email: DATA.contact.email,
        image: {
          "@type": "ImageObject",
          url: `${DOMAIN}/${PROFILE_IMAGE}`,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cebu City",
          addressCountry: "PH",
        },
        nationality: { "@type": "Country", name: "Philippines" },
        knowsLanguage: ["English", "Filipino"],
        mainEntityOfPage: `${DOMAIN}/#profilepage`,
        knowsAbout: TECH,
        alumniOf: DATA.education.map((edu, i) => ({
          "@type": i === 0 ? "CollegeOrUniversity" : "EducationalOrganization",
          name: edu.school,
        })),
        award: DATA.awards,
        hasCredential: DATA.credentials.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.name,
          credentialCategory: c.category,
          url: c.url,
          dateCreated: c.date,
          recognizedBy: { "@type": "Organization", name: c.issuer },
        })),
        sameAs: [GITHUB_URL, LINKEDIN_URL, DATA.profile.npm],
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
          author: { "@id": `${DOMAIN}/#person` },
          keywords: project.tech.join(", "),
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${DOMAIN}/#faq`,
      mainEntity: DATA.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const DESCRIPTION = `${NAME} is a ${ROLE} based in ${LOCATION}. Specializing in ${TECH_1}, ${TECH_2}, and ${TECH_3}. View projects and contact details.`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
    url: DOMAIN,
    title: `${NAME} - ${ROLE} | Portfolio`,
    description: DATA.profile.summary,
    siteName: `${NAME} Portfolio`,
    locale: "en_US",
    firstName: GIVEN_NAME,
    lastName: FAMILY_NAME,
    // og:image / twitter:image (1200x630, absolute URL, alt) are auto-wired
    // from app/opengraph-image.tsx via metadataBase — do not duplicate here.
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} - ${ROLE} | Portfolio`,
    description: DATA.profile.summary,
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
