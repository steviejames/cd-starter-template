import "./globals.css";
import { Metadata } from "next";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  icons: [],
  title: "Convite Digital - Template Starter",
  description: "Invitation template starter",
};

export default function RootLayout({ children }: IProps) {
  return (
    <html className="h-full" lang="pt-PT">
      <body className="h-full">{children}</body>
    </html>
  );
}
