import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/providers/AppProvider";

export const metadata: Metadata = {
  title: "Wallet Scavenger",
  description: "Powered by MetaMask Smart Account, transfer your assets (Native + ERC20) with one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
