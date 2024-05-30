import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { start } from "repl";

const inter = Inter({ subsets: ["latin"] });

const localiztion = {
  signIn: {
    start: {
      title: "Welcome back to zoom !",
      subtitle: "Sign in to continue",
    },
  },
  signUp: {
    start: {
      title: "Create an account",
      subtitle: "Sign up to continue",
    },
  },
};
export const metadata: Metadata = {
  title: "Zoom",
  description:
    "Zoom is a video conferencing tool that allows you to host meetings and webinars.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          logoImageUrl: "/icons/yoom-logo.svg",
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1c1f2e",
          colorInputBackground: "#252a41",
          colorInputText: "#fff",
        },
      }}
      localization={localiztion}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
