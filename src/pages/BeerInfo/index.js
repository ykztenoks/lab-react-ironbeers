import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "../../components/Header/index";

export function BeerInfo() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data);
      } catch (error) {
        console.log("404errrr");
      }
    }

    fetchBeer();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div>
        {" "}
        <Header />
      </div>
      <img style={{ width: "200px" }} src={beer.image_url} alt="beer" />
      <h3>{beer.name}</h3>
      <span>{beer.tagline}</span>
      <span>{beer.attenuation_level}</span>
      <strong>{beer.first_brewed}</strong>
      <div>
        <p>{beer.description}</p>
        <span>{beer.contributed_by}</span>
      </div>
    </div>
  );
}
