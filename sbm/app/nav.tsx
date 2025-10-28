import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex items-center">
        <span className="blind">북마크 메뉴</span>
        <ul className="flex items-center gap-3 h-full">
          <li className=" flex h-full items-center">
            <Link href="/bookcase" className="px-2 flex h-full items-center">
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
            <Link href="/sign" className=" px-2 flex h-full items-center">
              로그인
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
