import "./App.css";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import WeatherCard from "./components/WeatherCard";
import LanguageToggle from "./components/LanguageToggle";
import useWeather from "./hooks/useWeather";

function App() {
  const { t, locale, setLocale, direction, temp, date } = useWeather();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WeatherCard temp={temp} date={date} direction={direction} t={t} />
          <LanguageToggle locale={locale} setLocale={setLocale} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
