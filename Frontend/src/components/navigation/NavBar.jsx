import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h1 className="app-heading">Memebers-only app</h1>
      </Link>
    </nav>
  );
};

export default NavBar;
