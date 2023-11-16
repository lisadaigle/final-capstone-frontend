import React, { useState, useEffect } from "react";
import axios from "axios";

export function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [solarCalcLink, setSolarCalcLink] = useState("");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: "06403" },
        headers: {
          "X-RapidAPI-Key": "1d39780015msh4bc6e1419d73a97p1311e2jsn30ce7617ae19",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
        setSolarCalcLink(
          `https://suncalc.org/#/${response.data.location.lat},${response.data.location.lon},18/2023.03.28/13:15/324.0/2`
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#e6ffe6",
        overflowY: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Let's Grow Together</h1>
      <p
        style={{
          border: "2px solid #333",
          borderRadius: "8px",
          background: "linear-gradient(to bottom, #FFC107, #FF5733)",
          padding: "20px",
          marginTop: "10px",
          width: "65%",
          textAlign: "center",
        }}
      >
        <div>
          {solarCalcLink && (
            <a
              href={solarCalcLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Sun Tracker
            </a>
          )}
        </div>
      </p>

      <p
        style={{
          border: "2px solid #333",
          borderRadius: "8px",
          background: "linear-gradient(to bottom, #FF69B4, #9B30FF)",
          padding: "20px",
          marginTop: "10px",
          width: "65%",
          textAlign: "center",
        }}
      >
        <div>
          {solarCalcLink && (
            <a
              href="http://localhost:5173/plants"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Find Plants
            </a>
          )}
        </div>

        <p></p>
        <p></p>

        <div>
          {solarCalcLink && (
            <a
              href="http://localhost:5173/mygarden"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Your Garden{" "}
            </a>
          )}
        </div>
      </p>
      <p
        style={{
          border: "2px solid #333",
          borderRadius: "8px",
          background: "linear-gradient(to bottom, #87CEFA, #00008B)",
          padding: "20px",
          marginTop: "10px",
          width: "65%",
          textAlign: "center",
        }}
      >
        <p></p>
        <p></p>

        <div>
          <a href="#" onClick={() => setShowImage(!showImage)} style={{ color: "white", fontWeight: "bold" }}>
            Click here for your digital plant{" "}
          </a>
        </div>

        {showImage && (
          <img
            src="https://img.freepik.com/free-vector/flat-design-flower-pixel-art-illustration_23-2149294235.jpg?w=826&t=st=1679984836~exp=1679985436~hmac=6573f2682a588dd87d458450c460b47c9e710faf894505bc690f4a865f2dde76"
            alt="digital plant"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </p>

      {weatherData && (
        <div
          style={{
            border: "2px solid #333",
            borderRadius: "8px",
            // backgroundColor: "#a3e0ff",
            background: "linear-gradient(to bottom, #3CB371, #00FFFF)",
            padding: "20px",
            marginTop: "10px",
            width: "65%",
            textAlign: "center",
          }}
        >
          <h1>WEATHER</h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <h4>{weatherData.location.name},</h4>
          <h4>{weatherData.location.region}</h4>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>{weatherData.location.localtime} </p>
          <p> Current Temp: {weatherData.current.temp_f}</p>
          <p> Feels Like: {weatherData.current.feelslike_f}</p>
          <p> UV Index: {weatherData.current.uv}</p>
          <p>Wind MPH: {weatherData.current.wind_mph}</p>
        </div>
      )}
      <div style={{ position: "sticky", marginTop: "10px", marginRight: "20px", width: "65%", textAlign: "center" }}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=450&wkst=1&bgcolor=%237CB342&ctz=America%2FNew_York&showTitle=1&title=%20Schedule%20&showPrint=0&showDate=1&showNav=1&showCalendars=0&showTz=1&src=YmVhY29uZ2F0aGVyc0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
          style={{ border: "solid 1px #777", width: "100%", height: "650px", margin: "0 auto" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
