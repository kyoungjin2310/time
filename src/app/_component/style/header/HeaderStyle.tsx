"use client";

import { NextPage } from "next";
import Logo from "../../logo/Logo";
import { ThemeSwitcher } from "../btn/ThemeSwitcher";
import LangBtn from "../btn/LangBtn";
import BtnStyle from "../btn/BtnStyle";
import style from "./header.module.css";
import { useTheme } from "next-themes";
import Link from "next/link";
interface Props {}

const HeaderStyle: NextPage<Props> = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <header className={`${style.mainHeader} ${style[`${theme}`]}`}>
      <Logo />
      <nav className={style.gnb}>
        <ul className={`${style.flex} ${style.left}`}>
          <li>
            <Link href="/home">Ti:Me</Link>
          </li>
          <li>
            <Link href="/guide">User Guide</Link>
          </li>
        </ul>
        <ul className={`${style.flex} ${style.right}`}>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <BtnStyle opt={{ text: "Sign in" }} />
          </li>
          <li>
            <LangBtn />
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderStyle;
