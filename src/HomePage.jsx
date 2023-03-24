import React, { useState, useEffect } from "react";
import axios from "axios";

export function HomePage() {
  const [weatherData, setWeatherData] = useState(null);

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
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: "100vh",
        padding: "20px",
      }}
    >
      <div style={{ position: "sticky", top: "0", marginRight: "20px" }}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=450&wkst=1&bgcolor=%237CB342&ctz=America%2FNew_York&showTitle=1&title=%20Schedule%20&showPrint=0&showDate=1&showNav=1&showCalendars=0&showTz=1&src=YmVhY29uZ2F0aGVyc0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679"
          style={{ border: "solid 1px #777", width: "450px", height: "450px", margin: "0 auto" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <p>Welcome to Trellis</p>
      <p>To add plants to your garden check out our plant repsoitory</p>
      {weatherData && (
        <div
          style={{
            border: "2px solid #333",
            borderRadius: "8px",
            backgroundColor: "#a3e0ff",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h3>Today's Weather:</h3>

          <p>Location: {weatherData.location.name} </p>
          <p> Current Temp: {weatherData.current.temp_f}</p>
          <p> UV Index: {weatherData.current.uv}</p>
          <p> Feels Like: {weatherData.current.feelslike_f}</p>
        </div>
      )}
    </div>
  );
}
