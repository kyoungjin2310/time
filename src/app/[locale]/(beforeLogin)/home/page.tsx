import HeaderStyle from "@/app/[locale]/_component/style/header/HeaderStyle";
import { NextPage } from "next";
import Main from "@/app/[locale]/(beforeLogin)/_component/Main";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <HeaderStyle />
      <Main />
    </>
  );
};

export default Page;
