import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Management System</h2>

      <div className="nav-links">
        <Link to="/">Registration</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
