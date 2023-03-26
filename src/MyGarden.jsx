import React, { useState } from "react";
import axios from "axios";

export function MyGarden(props) {
  const [schedule, setSchedule] = useState({});

  const handleSubmit = async (e, gardenPlant) => {
    e.preventDefault();
    const lastWatered = e.target.lastWatered.value;
    const response = await axios.post("http://localhost:3000/watering_schedule.json", {
      plant_id: gardenPlant.id,
      last_watered: lastWatered,
    });
    setSchedule(response.data);
  };

  return (
    <div
      id="garden-index"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#e6ffe6",
      }}
    >
      <h1>My Garden</h1>
      {props.gardenPlants.map((gardenPlant) => (
        <div key={gardenPlant.id}>
          <h2>{gardenPlant.name}</h2>
          {/* <p>Description: {gardenPlant.description}</p> */}
          <img src={gardenPlant.image_url} alt={gardenPlant.name} style={{ width: "200px", height: "auto" }} />
          <h2>Amount of Sun: {gardenPlant.amount_of_sun}</h2>
          <h2>Watering Interval (days): {gardenPlant.days_to_water} </h2>
          <form onSubmit={(e) => handleSubmit(e, gardenPlant)}>
            <label>
              Last watered:
              <select name="lastWatered">
                <option value="">Select</option>
                <option value="yesterday">Yesterday</option>
                <option value="today">Today</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
          {schedule[gardenPlant.id] && (
            <p>
              Next watering: <strong>{schedule[gardenPlant.id]}</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
