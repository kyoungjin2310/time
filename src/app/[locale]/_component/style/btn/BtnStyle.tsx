import style from "@/app/[locale]/_component/style/btn/btn.module.css";

import { motion } from "framer-motion";
interface Props {
  opt?: {
    class?: string;
    text: string;
  };
}

const BtnStyle = ({ opt }: Props) => {
  return (
    <motion.button className={`${style.btn} ${opt?.class}`}>
      {opt?.text}
    </motion.button>
  );
};

export default BtnStyle;
