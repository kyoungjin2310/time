"use client";
import { useI18n } from "@/app/messages/client";
import style from "@/app/[locale]/_component/style/btn/btn.module.css";
import { useState } from "react";
const MainBtn = () => {
  const [active, setActive] = useState<number | null>(1);
  const t = useI18n();
  const [dataTabs, setDataTabs] = useState<TabLink>([
    {
      id: 1,
      tabTitle: t("mainBtn1"),
      tabClass: "mainBtn",
      tabClicked: false,
    },
    {
      id: 2,
      tabTitle: t("mainBtn2"),
      tabClass: "mainBtn",
      tabClicked: false,
    },
  ]);

  const NavLink = ({ id, tabTitle, isActive, onClick }: TabNavLink) => {
    return (
      <a
        href="#"
        onClick={() => navigate(id)}
        className={isActive ? "active" : undefined}
      >
        {tabTitle}
      </a>
    );
  };

  const navigate = (id: number | null) => {
    setActive(id);
  };

  return (
    <div className={style.mainBtn}>
      {dataTabs.map((item) => (
        <li key={item.id}>
          <NavLink {...item} isActive={active === item.id} onClick={navigate} />
        </li>
      ))}
    </div>
  );
};

export default MainBtn;
