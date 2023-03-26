import { useState } from "react";
import axios from "axios";

export function PlantsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

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
      id="plants-index"
      style={{
        display: "flex",

        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#e6ffe6",
        overflowY: "scroll",
      }}
    >
      <h1>All Plants</h1>
      Search by name:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
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
            <h2>{plant.name}</h2>
            <p>Description: {plant.description}</p>
            <img src={plant.image_url} alt={plant.name} style={{ width: "200px", height: "auto" }} />
            <h2>Amount of Sun: {plant.amount_of_sun}</h2>
            <h2>Watering Interval: {plant.days_to_water} </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button onClick={() => onSavePlantToGarden(plant)}>SAVE TO MY GARDEN</button>

              <a
                href={`https://www.thesill.com/search?q=${encodeURIComponent(plant.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "4px",
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
