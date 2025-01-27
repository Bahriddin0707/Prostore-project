import type { Metadata } from "next";
import { Inter as GoogleInter } from "next/font/google";
import "../assets/styles/globals.css";
import { ThemeProvider } from "next-themes";

const interFont = GoogleInter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prostore project",
  description: "eCommerrce project for the best items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
