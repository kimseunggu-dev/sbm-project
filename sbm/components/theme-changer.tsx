"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEMES = ["light", "dark"] as const;
const THEME_ICONS = {
  light: <MoonIcon />,
  dark: <SunIcon />,
};

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    return () => {};
  }, []);

  if (!mount || !theme) {
    return <button></button>;
  }

  const changeTheme = () => {
    const idx = THEMES.indexOf(theme as keyof typeof THEME_ICONS) + 1;
    setTheme(THEMES[idx === THEMES.length ? 0 : idx]);
  };

  return (
    // 시스템 테마 영역은 언제든지 레이아웃을 옮길 수 있으니 우선 오른쪽 하단 위치
    <div className="absolute bottom-10 right-10 ">
      <span className="blind">시스템 테마</span>
      <button
        onClick={changeTheme}
        className="p-3 rounded-full dark:border-white border box-border border-black"
      >
        {THEME_ICONS[theme as keyof typeof THEME_ICONS]}
        {/* <span>{theme}</span> */}
      </button>
    </div>
  );
}
