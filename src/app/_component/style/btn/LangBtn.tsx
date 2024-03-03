"use client";
import { useState } from "react";
import LangIcon from "./icon/LangIcon";

const LangBtn = ({}) => {
  const [show, setShow] = useState(false);
  return (
    <button onClick={() => setShow(!show)}>
      <LangIcon />
      <div></div>
    </button>
  );
};

export default LangBtn;
