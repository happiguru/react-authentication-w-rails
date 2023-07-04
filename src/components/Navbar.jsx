import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>
    </div>
  );
}
