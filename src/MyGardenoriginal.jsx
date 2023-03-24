export function MyGarden(props) {
  return (
    <div id="garden-index">
      <h1>Your Garden</h1>
      <div></div>
      {props.gardenPlants.map((gardenPlant) => (
        <option key={gardenPlant.id} value={gardenPlant.name}></option>
      ))}
      {props.gardenPlants.map((gardenPlant) => (
        <div key={gardenPlant.id}>
          <h2>{gardenPlant.name}</h2>
          <p>Description: {gardenPlant.description}</p>
          <h2>Amount of Sun: {gardenPlant.amount_of_sun}</h2>
          <h2>Days to Water: {gardenPlant.days_to_water} </h2>
        </div>
      ))}
    </div>
  );
}
