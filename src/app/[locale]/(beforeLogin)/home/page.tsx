"use client";

import HeaderStyle from "@/app/[locale]/_component/style/header/HeaderStyle";
import { NextPage } from "next";
import { useI18n } from "@/app/messages/client";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const t = useI18n();

  return (
    <>
      <HeaderStyle />
      <div>{t("hello")}</div>
    </>
  );
};

export default Page;
