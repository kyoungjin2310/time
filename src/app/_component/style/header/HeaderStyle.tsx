import { NextPage } from "next";
import Logo from "../../logo/Logo";
import { ThemeSwitcher } from "../btn/ThemeSwitcher";
import LangBtn from "../btn/LangBtn";

interface Props {}

const HeaderStyle: NextPage<Props> = ({}) => {
  return (
    <header className="mainHeader">
      <Logo />
      <ul>
        <li>Ti:Me</li>
        <li>User Guide</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>Sign in</li>
        <li>
          <LangBtn />
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
};

export default HeaderStyle;
