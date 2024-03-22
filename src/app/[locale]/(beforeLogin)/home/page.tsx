import HeaderStyle from "@/app/[locale]/_component/style/header/HeaderStyle";
import { NextPage } from "next";
import Main from "@/app/[locale]/(beforeLogin)/_component/Main";
import RQProvider from "../_component/RQProvider";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <RQProvider>
        <HeaderStyle />
        <Main />
      </RQProvider>
    </>
  );
};

export default Page;
