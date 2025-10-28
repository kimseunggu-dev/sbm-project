import ThemeChanger from "@/components/theme-changer";
import { ThemeProvider } from "@/components/theme-provider";
import { BookmarkIcon } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Nav from "./nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "북마크",
  description: "북마크 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500 ease-in-out`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          // disableTransitionOnChange 속성은 테마가 바뀔 때 브라우저가 잠시 모든 CSS 트랜지션을 비활성화하도록 강제하여 false 값을 넣어서 해제한다.
        >
          <div className="">
            <header className="h-20 border-b border-b-black dark:border-b-white">
              <div className="px-6 flex justify-between h-full">
                <Link href="/" className="flex items-center">
                  <span className="blind">북마크</span>
                  {/* 시간되면 로고 만들어 보기(퍼포먼스) */}
                  <BookmarkIcon />
                  <span className="font-bold">BookMark</span>
                </Link>
                <Nav />
              </div>
            </header>
            <main>{children}</main>
            <footer className="flex justify-between">
              <address className="not-italic">@김승구</address>
              <ul>
                <li>
                  <a href="/">깃허브</a>
                </li>
              </ul>
            </footer>
          </div>
          <ThemeChanger />
        </ThemeProvider>
      </body>
    </html>
  );
}
