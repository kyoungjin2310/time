import { useI18n } from "@/app/messages/client";

const ToggleBtn = () => {
  const t = useI18n();
  return (
    <div>
      <button>{t("mainBtn1")}</button>
      <button>{t("mainBtn2")}</button>
    </div>
  );
};

export default ToggleBtn;
