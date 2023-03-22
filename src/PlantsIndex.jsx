import { useState } from "react";
import axios from "axios";

export function PlantsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  ///this is new

  const onSavePlantToGarden = (plant) => {
    if (!props.loggedIn) {
      alert("You must be logged in to save plants to your garden.");
      return;
    }

    axios
      .post("/user_plants", { plant_id: plant.id })
      .then((response) => {
        if (response.status === 200) {
          alert("Plant saved to garden.");
        } else {
          alert("Failed to save plant to garden.");
        }
        setUserPlants([...userPlants, response.data]);
      })
      .catch((error) => {
        alert("Failed to save plant to garden.");
        console.log(error);
      });
  };

  ////this is new

  return (
    <div id="plants-index">
      <h1>All Plants</h1>
      Search:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        <div></div>
        {props.plants.map((plant) => (
          <option key={plant.id} value={plant.name}></option>
        ))}
      </datalist>
      {props.plants
        .filter((plant) => plant.name.toLowerCase().includes(searchFilter.toLowerCase()))

        .map((plant) => (
          <div key={plant.id}>
            <h2>{plant.name}</h2>
            {/* <img src={plant.images[0].url} alt="" /> */}
            <p>Description: {plant.description}</p>
            <h2>Amount of Sun: {plant.amount_of_sun}</h2>
            {/* <button onClick={() => props.onShowPlant(plant)}>SAVE TO MY GARDEN</button> */}

            <button onClick={() => onSavePlantToGarden(plant)}>SAVE TO MY GARDEN</button>
          </div>
        ))}
    </div>
  );
}
