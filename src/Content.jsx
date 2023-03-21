import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { HomePage } from "./HomePage";

export function Content() {
  const [plants, setPlants] = useState([]);

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  };

  useEffect(handleIndexPlants, []);

  return (
    <div className="container">
      <Routes>
        <Route path="logout" element={<LogoutLink />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsIndex plants={plants} />} />
      </Routes>
    </div>
  );
}
