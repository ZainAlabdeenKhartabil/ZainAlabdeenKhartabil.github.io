import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zain Alabdeen Khartabil | Software Engineer",
  description: "Software engineering portfolio of Zain Alabdeen Khartabil, a specialist in .NET and Full Stack Development.",
  icons: {
    icon: "/zk.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col text-slate-200 bg-slate-950 selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
