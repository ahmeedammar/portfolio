import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Ammar - Software Engineer & Full-Stack Developer",
  description: "Portfolio of Ahmed Ammar, a motivated Software Engineer with expertise in PHP, Laravel, MySQL, JavaScript, React, and Angular. Specializing in building scalable web applications.",
  keywords: "Ahmed Ammar, Software Engineer, Full-Stack Developer, PHP, Laravel, React, Angular, JavaScript, MySQL, Web Development, Tunisia",
  authors: [{ name: "Ahmed Ammar" }],
  openGraph: {
    title: "Ahmed Ammar - Software Engineer & Full-Stack Developer",
    description: "Portfolio of Ahmed Ammar, a motivated Software Engineer with expertise in PHP, Laravel, MySQL, JavaScript, React, and Angular.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
