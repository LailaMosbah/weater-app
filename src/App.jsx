import "./App.css";
import "./styles/style.css";
// React
import { useEffect, useState } from "react";
// MUI Components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
// External Libraries
import axios from "axios";
import moment from "moment";
import "moment/dist/locale/ar";
import { useTranslation } from "react-i18next";

const theme = createTheme({
  typography: {
    fontFamily: ["arabic"],
  },
});

function App() {
  // ====== States =======
  const [temp, setTemp] = useState({
    currentTemp: 0,
    maxTemp: 0,
    minTemp: 0,
    description: "",
    iconImg: "",
  });
  const [date, setDate] = useState("");
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState("en");

  // ====== Initialize Language and Moment ======
  useEffect(() => {
    // Set initial language and moment locale
    i18n.changeLanguage(locale);
    moment.locale(locale);
    setDate(moment().format("LL"));

    // Fetch weather data
    const controller = new AbortController();
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=26.82&lon=30.80&appid=90ef7769658f0a609f37416a95496a80",
        {
          signal: controller.signal,
        }
      )
      .then((response) => {
        const data = response.data;
        setTemp({
          currentTemp: data.main.temp,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
          description: data.weather[0].description,
          iconImg: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          console.error(error);
        }
      });

    return () => controller.abort();
  }, []); // Empty dependency array for initial render only

  // ====== Update Date on Language Change ======
  useEffect(() => {
    moment.locale(locale);
    setDate(moment().format("LL"));
  }, [locale]);

  // ====== Event Handlers ======
  const handleLanguage = () => {
    const newlocale = locale === "en" ? "ar" : "en";
    setLocale(newlocale);
    i18n.changeLanguage(newlocale);
  };

  const formatNumber = (value, locale) => {
    return new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US").format(
      value
    );
  };

  // ====== JSX =====
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ height: "100vh" }}>
        <div className="container">
          {/* ====== Card ====== */}
          <div
            className="card"
            style={{ direction: locale == "ar" ? "rtl" : "ltr" }}
          >
            {/* === Country & Date === */}
            <div className="head">
              <Typography
                variant="h2"
                component="h1"
                sx={{ paddingX: "25px" }}
                fontWeight={500}
              >
                {t("Egypt")}
              </Typography>
              <Typography variant="h5">{date}</Typography>
            </div>
            <Divider sx={{ backgroundColor: "white" }} />
            <div className="content">
              {/* Info: temperature, description, min & max */}
              <div className="info">
                {temp.currentTemp ? (
                  <Typography variant="h2" fontWeight={500}>
                    {formatNumber(
                      (temp.currentTemp - 273.15).toFixed(1),
                      locale
                    )}
                    °C
                  </Typography>
                ) : (
                  <Typography variant="h2" fontWeight={500}>
                    {t("loading")}
                  </Typography>
                )}
                <Typography variant="h5">{t(temp.description)}</Typography>
                <Typography>
                  {t("min")} :{" "}
                  {formatNumber((temp.minTemp - 273.15).toFixed(1), locale)}°C
                  <span style={{ margin: "5px" }}>|</span>
                  {t("max")} :{" "}
                  {formatNumber((temp.maxTemp - 273.15).toFixed(1), locale)}°C
                </Typography>
              </div>
              {/* Icon for Decoration */}
              <div>
                {temp.iconImg && (
                  <img
                    src={temp.iconImg}
                    alt={t(temp.description)}
                    style={{ width: "150px", height: "150px" }}
                  />
                )}
              </div>
            </div>
          </div>
          {/* ====== Button ====== */}
          <div style={{ width: "100%", margin: "10px" }}>
            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "#064983" }}
              onClick={handleLanguage}
            >
              {locale === "en" ? "العربية" : "English"}
            </Button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
