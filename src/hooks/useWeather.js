import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { getWeather } from "../services/weatherAPI";
import { formatDate } from "../utils/formatDate";
import { useTranslation } from "react-i18next";

export default function useWeather() {
  const { t, i18n } = useTranslation();

  const [locale, setLocale] = useState("ar");
  const [temp, setTemp] = useState(null);
  const [date, setDate] = useState(formatDate());

  const direction = locale === "ar" ? "rtl" : "ltr";

  // language changes
  useEffect(() => {
    i18n.changeLanguage(locale);
    moment.locale(locale);
    setDate(formatDate());
  }, [locale]);

  // weather API
  useEffect(() => {
    const source = axios.CancelToken.source();
    getWeather(source.token).then(setTemp).catch(console.log);
    return () => source.cancel();
  }, []);

  return { t, locale, setLocale, direction, temp, date };
}
