import { BookmarkIcon } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <header className="h-20 border-b border-b-black">
            <div className="px-6 flex justify-between h-full">
              <Link href="/" className="flex items-center">
                <span className="blind">북마크</span>
                {/* 시간되면 로고 만들어 보기(퍼포먼스) */}
                <BookmarkIcon />
                <span className="font-bold">BookMark</span>
              </Link>
              <nav className="flex items-center">
                <span className="blind">북마크 메뉴</span>
                <ul className="flex items-center gap-3 h-full">
                  <li className=" flex h-full items-center">
                    <Link
                      href="/bookcase"
                      className="px-2 flex h-full items-center"
                    >
                      북케이스
                      {/* <SquareLibraryIcon /> */}
                    </Link>
                  </li>
                  <li className=" flex h-full items-center">
                    <Link href="/my" className="px-2 flex h-full items-center">
                      나의 북마크
                    </Link>
                  </li>
                  <li className=" flex h-full items-center">
                    <Link
                      href="/sign"
                      className=" px-2 flex h-full items-center"
                    >
                      로그인
                    </Link>
                  </li>
                </ul>
              </nav>
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
      </body>
    </html>
  );
}
