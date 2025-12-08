import { Button } from "@mui/material";

export default function LanguageToggle({ locale, setLocale }) {
  function handleClick() {
    setLocale(locale === "en" ? "ar" : "en");
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        marginTop: "20px",
      }}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Button
        style={{ color: "white" }}
        variant="text"
        onClick={handleClick}
      >
        {locale === "en" ? "Arabic" : "إنجليزي"}
      </Button>
    </div>
  );
}
