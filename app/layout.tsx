import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lambda Solutions LLC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
