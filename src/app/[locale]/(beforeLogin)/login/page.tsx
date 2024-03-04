"use client";
import InputStyle from "@/app/[locale]/_component/style/input/InputStyle";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  title: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  style: string;
}

const Page: NextPage<Props> = ({}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {};

  const inputId: Props = {
    title: "ID",
    id: "id",
    type: "text",
    placeholder: "아이디를 입력해주세요.",
    value: id,
    style: "",
  };

  const inputPassword: Props = {
    title: "Password",
    id: "password",
    type: "password",
    placeholder: "패스워드를 입력해주세요.",
    value: password,
    style: "",
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <div>
          <InputStyle input={inputId} onChangeValue={setId} />
          <InputStyle input={inputPassword} onChangeValue={setPassword} />
        </div>
      </fieldset>
    </form>
  );
};

export default Page;
