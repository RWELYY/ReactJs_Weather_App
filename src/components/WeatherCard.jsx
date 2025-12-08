import { Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

export default function WeatherCard({ temp, date, direction, t }) {
  if (!temp) return null;

  return (
    <div
      dir={direction}
      style={{
        width: "100%",
        background: "rgb(28 52 91 / 36%)",
        color: "white",
        padding: "10px",
        borderRadius: "15px",
        boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
      }}
    >
      <div>
        {/* CITY & TIME */}
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
          }}
        >
          <Typography variant="h2" style={{ marginRight: "20px", fontWeight: 600 }}>
            {t("Riyadh")}
          </Typography>

          <Typography variant="h5">{date}</Typography>
        </div>

        <hr />

        {/* TEMP + ICON */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h1">{temp.number}</Typography>
              <img src={temp.icon} alt="weather icon" />
            </div>

            <Typography variant="h6">{t(temp.description)}</Typography>

            {/* MIN & MAX */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <h5>{t("min")}: {temp.min}</h5>
              <h5 style={{ margin: "0px 5px" }}>|</h5>
              <h5>{t("max")}: {temp.max}</h5>
            </div>
          </div>

          <CloudIcon style={{ fontSize: "200px", color: "white" }} />
        </div>
      </div>
    </div>
  );
}
