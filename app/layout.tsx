import Header from "@/components/header/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header/>
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright © 2023 - All right reserved by Next Amazona V2</p>
          </footer>
          </div>
      </body>
    </html>
  );
}
