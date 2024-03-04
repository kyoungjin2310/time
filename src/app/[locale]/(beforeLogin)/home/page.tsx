import HeaderStyle from "@/app/[locale]/_component/style/header/HeaderStyle";
import { NextPage } from "next";
import { useTranslations } from "next-intl";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const t = useTranslations();

  return (
    <>
      <HeaderStyle />
      <div>{t("test")}</div>
    </>
  );
};

export default Page;
