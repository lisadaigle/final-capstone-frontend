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
        flexDirection: "column",
        gap: "20px",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: "20px",
        backgroundColor: "#e6ffe6",
        overflowY: "auto",
      }}
    >
      <h1>My Garden</h1>

      {props.gardenPlants.map((gardenPlant) => (
        <div key={gardenPlant.id}>
          <h2>{gardenPlant.name}</h2>
          <img src={gardenPlant.image_url} alt={gardenPlant.name} style={{ width: "150px", height: "auto" }} />
          <h3>Amount of Sun: {gardenPlant.amount_of_sun}</h3>
          <h3>Watering Interval (days): {gardenPlant.days_to_water} </h3>
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
          <a
            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230327T131500Z%2F20230327T134500Z&details=%20${
              schedule[gardenPlant.id]
            }%20Water%20every%20${
              gardenPlant.days_to_water
            }%20days.&location=357%20Blackberry%20Hill%20Road%20&text=%20${gardenPlant.name}%20:%20water`}
            title="Save Event in my Calendar"
            target="_blank"
          >
            Add to Calendar
          </a>
          <p></p>
          <button onClick={(e) => handleDelete(e, gardenPlant)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
