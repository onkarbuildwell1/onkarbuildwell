
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onkar Buildwell | Ready Mix Concrete in Amritsar & Batala",
  description:
    "Explore ready mix concrete grades, indicative prices and quotation enquiries from Onkar Buildwell in Amritsar, Batala and nearby Punjab areas.",
  keywords: [
    "RMC supplier Amritsar",
    "ready mix concrete Batala",
    "ready mix concrete Punjab",
    "M25 concrete",
    "M30 concrete",
    "construction materials"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102b46"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
