import { Header } from "../../components/Header/index";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function AllBeers() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeer(response.data);
      } catch (error) {
        console.log("404errrr");
      }
    }

    fetchBeer();
  }, []);

  return (
    <div>
      <Header />

      {beer.map((currentBeer) => {
        return (
          <div>
            <Link to={`/${currentBeer._id}`}>
              <img
                src={currentBeer.image_url}
                style={{ width: "100px" }}
                alt="beer"
              />
              <h3>{currentBeer.name}</h3>
              <h5>{currentBeer.tagline}</h5>
              <span>
                <strong>Created by:</strong>
                {currentBeer.contributed_by}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
