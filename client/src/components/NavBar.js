import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/homepage">
        <h1>Flatiron School Attendance App</h1>
      </Link>
    </header>
  );
}

export default Navbar;