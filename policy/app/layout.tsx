import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Пользовательское соглашении о сборе данных",
  description: "Ну чувак даже тут нужно соглашаться",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
