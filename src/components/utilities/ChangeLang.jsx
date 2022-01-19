import { useContext } from "react";
import { langContext } from "../../contexts/LanguageContext";

export default function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(langContext);

  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
      >
        {contextLang}
      </button>
    </div>
  );
}
