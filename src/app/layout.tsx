import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entrar | EmpresTI",
  description: "Acesso ao sistema interno de empréstimo de equipamentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
