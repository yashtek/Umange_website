import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UManage | Your life, organized",
  description: "A calmer way to manage the people, plans, and details that matter.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "UManage | Your life, organized",
    description: "A calmer way to manage the people, plans, and details that matter.",
    type: "website",
    images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: "UManage logo" }],
  },
  twitter: {
    card: "summary",
    title: "UManage | Your life, organized",
    description: "A calmer way to manage the people, plans, and details that matter.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full">{children}<Toaster /></body>
    </html>
  );
}
