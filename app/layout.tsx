import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  name: "Matrix Learning",
  description: "Matrix Learning is a student-led nonprofit STEM organization providing advanced education in computer science and mathematics.",
  url: "https://matrixlearning.org",
};

export const metadata: Metadata = {
  verification: {
    google: "56155c3d3cff61b4",
  },
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "STEM Education",
    "Computer Science Tutoring",
    "Mathematics Courses",
    "Student-led Nonprofit",
    "STEM Richmond VA",
    "Coding Classes",
    "Free STEM Resources",
    "Matrix Learning",
    "Advanced STEM Classes"
  ],
  authors: [
    {
      name: "Matrix Learning Team",
      url: siteConfig.url,
    },
  ],
  creator: "Matrix Learning Team",
  publisher: "Matrix Learning Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
  },
  manifest: "/site.webmanifest",
  category: "Education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Matrix Learning",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/logo.png`,
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Richmond",
    "addressRegion": "VA",
    "addressCountry": "US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReduxProvider>
          <ThemeRegistry>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
