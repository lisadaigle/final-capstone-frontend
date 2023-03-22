import { useState } from "react";
import axios from "axios";

export function PlantsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  const loggedIn = localStorage.jwt !== undefined;

  const onSavePlantToGarden = (plant) => {
    if (!loggedIn) {
      alert("You must be logged in to save plants to your garden.");
    } else {
      alert("You are logged in.");
      // add logic to save plant to user's garden
    }
  };

  //   axios
  //     .post("/user_plants", { plant_id: plant.id })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         alert("Plant saved to garden.");
  //       } else {
  //         alert("Failed to save plant to garden.");
  //       }
  //       setUserPlants([...userPlants, response.data]);
  //     })
  //     .catch((error) => {
  //       alert("Failed to save plant to garden.");
  //       console.log(error);
  //     });
  // };

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
            <p>Description: {plant.description}</p>
            <h2>Amount of Sun: {plant.amount_of_sun}</h2>
            <button onClick={() => onSavePlantToGarden(plant)}>SAVE TO MY GARDEN</button>
          </div>
        ))}
    </div>
  );
}
