import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { HomePage } from "./HomePage";
import { MyGarden } from "./MyGarden";
import { Welcome } from "./Welcome";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [gardenPlants, setGardenPlants] = useState([]);

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  };

  const handleGardenPlants = () => {
    console.log("handleGardenPlants");
    axios
      .get("http://localhost:3000/carted_plants.json", {
        headers: {
          Authorization: `Bearer ${localStorage.jwt}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setGardenPlants(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch garden plants", error);
      });
  };

  useEffect(() => {
    handleIndexPlants();
    handleGardenPlants();
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="logout" element={<LogoutLink />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mygarden" element={<MyGarden gardenPlants={gardenPlants} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/hello" element={<HomePage />} />
        <Route path="/plants" element={<PlantsIndex plants={plants} />} />
      </Routes>
    </div>
  );
}
