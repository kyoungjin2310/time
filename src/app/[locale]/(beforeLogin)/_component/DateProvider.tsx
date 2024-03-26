import React, { createContext, ReactNode, useState } from "react";

interface MyContextType {
  value: string;
  setValue: (value: string) => void;
}

interface ModalType {
  children: ReactNode;
}
const MyContext = createContext<MyContextType | null>(null);

const DateProvider = ({ children }: ModalType) => {
  const [value, setValue] = useState(`${new Date()}`);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, DateProvider };
