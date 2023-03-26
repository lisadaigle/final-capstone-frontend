import { useState } from "react";
import axios from "axios";

export function PlantsIndex(props) {
  const [searchFilter, setNameSearchFilter] = useState("");

  const loggedIn = localStorage.jwt !== undefined;

  const onSavePlantToGarden = (plant) => {
    if (!loggedIn) {
      alert("You must be logged in to save plants to your garden.");
    } else {
      const data = {
        plant_id: plant.id,
        name: plant.name,
        description: plant.description,
        image_url: plant.image_url,
        amount_of_sun: plant.amount_of_sun,
        days_to_water: plant.days_to_water,
        user_id: localStorage.user_id,
      };
      axios
        .post("http://localhost:3000/carted_plants.json", data)
        .then((response) => {
          alert("Plant saved to your garden!");
        })
        .catch((error) => {
          alert("Failed to save plant to your garden.");
          console.log(error);
        });
    }
  };

  return (
    <div
      className="plants-index-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: "20px",
        backgroundColor: "#e6ffe6",
        overflowY: "auto",
      }}
    >
      <h1>All Plants</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: "20px", marginRight: "10px" }}>Search by name:</span>
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => setNameSearchFilter(event.target.value)}
          list="titles"
          style={{ borderBottom: "2px solid black", fontSize: "16px" }}
        />
      </div>

      <datalist id="titles">
        <div></div>
        {props.plants.map((plant) => (
          <option key={plant.id} value={plant.name}></option>
        ))}
      </datalist>
      {props.plants
        .filter((plant) => plant.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .filter((plant) => plant.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .filter((plant) => plant.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((plant) => (
          <div key={plant.id}>
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>{plant.name}</h2>
            <p> {plant.description}</p>

            <h4>Amount of Sun: {plant.amount_of_sun}</h4>
            <h4>Watering Interval (days): {plant.days_to_water} </h4>
            <img
              src={plant.image_url}
              alt={plant.name}
              style={{ width: "300px", height: "auto", display: "block", margin: "auto" }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p></p>
              <p></p>
              <button className="save-button" onClick={() => onSavePlantToGarden(plant)}>
                SAVE TO MY GARDEN
              </button>

              <a
                className="shop-link"
                href={`https://www.thesill.com/search?q=${encodeURIComponent(plant.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                SHOP
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
