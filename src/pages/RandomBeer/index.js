import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../components/Header/index";

export function RandomBeer() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setBeer(response.data);
      } catch (error) {
        console.log("wrongggg");
      }
    }
    fetchBeer();
  }, []);

  return (
    <div>
      <Header />
      <img src={beer.image_url} alt="beer" />
      <div>
        {" "}
        <h3>{beer.name}</h3>
        <span>{beer.tagline}</span>
        <span>{beer.attenuation_level}</span>
        <strong>{beer.first_brewed}</strong>
      </div>
      <div>
        <p>{beer.description}</p>
        <span>{beer.contributed_by}</span>
      </div>
    </div>
  );
}
