import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home Page</p>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default Home;
