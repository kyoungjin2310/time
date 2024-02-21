import style from "@/app/_component/style/btn/btn.module.css";
interface Props {
  opt?: {
    class?: string;
    text: string;
  };
}

const BtnStyle = ({ opt }: Props) => {
  return <button className={`${style.btn} ${opt?.class}`}>{opt?.text}</button>;
};

export default BtnStyle;
