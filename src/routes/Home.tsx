import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-card p-10 rounded">
      <p>Home Page</p>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default Home;
