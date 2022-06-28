import img1 from "../../assets/beers.png";
import img2 from "../../assets/new-beer.png";
import img3 from "../../assets/random-beer.png";
import { Link } from "react-router-dom";
export function Homepage() {
  return (
    <div>
      <Link to="/allbeers" style={{ textDecoration: "none" }}>
        {" "}
        <img src={img1} alt="allbeers" />
        <h2>All Beers</h2>
        <p>Check some of the greatest handcrafted beers in the world!</p>
      </Link>
      <Link to="/randombeer" style={{ textDecoration: "none" }}>
        <img src={img3} alt="randombeers" />
        <h2>Random Beers</h2>
        <p>
          We'll pick a random handcrafted beer from our list for you to try!
        </p>
      </Link>
      <Link to="/newbeer" style={{ textDecoration: "none" }}>
        {" "}
        <img src={img2} alt="newbeer" />
        <h2>New Beer</h2>
        <p>
          Know some great beer? Share with us! Add you're favourite beer to our
          database
        </p>
      </Link>
    </div>
  );
}
