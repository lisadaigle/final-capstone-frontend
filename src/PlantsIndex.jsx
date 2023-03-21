export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>Name: {plant.name}</h2>
          <h2>Description: {plant.description}</h2>
          <h2>Amount of Sun: {plant.amount_of_sun}</h2>
        </div>
      ))}
    </div>
  );
}
