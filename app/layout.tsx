import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol =
    headerList.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host ?? "localhost:3000"}`);

  return {
    metadataBase,
    title: "Dra. Amanda Odontologia",
    description:
      "Landing page para consultorio odontologico com odontopediatria e clinica geral para adultos.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Dra. Amanda Odontologia",
      description:
        "Atendimento odontologico acolhedor para criancas e adultos.",
      images: [
        {
          url: "/clinic-interior.png",
          width: 1536,
          height: 1024,
          alt: "Consultorio odontologico moderno e acolhedor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dra. Amanda Odontologia",
      description:
        "Odontopediatria e clinica geral em um consultorio acolhedor.",
      images: ["/clinic-interior.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
