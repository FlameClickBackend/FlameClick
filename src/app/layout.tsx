import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlameClick",
  description: "Campaign intelligence that turns a brief into a strategic blueprint.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
