"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const DateContext = createContext({
  date: `${new Date()}`,
  setDate: (value: string) => {},
});
const useDateContext = () => useContext(DateContext);

type Props = { children: ReactNode };

const DateProvider = ({ children }: Props) => {
  const [date, setDate] = useState(`${dayjs(new Date()).format("ddd")}`);
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, useDateContext, DateProvider };
