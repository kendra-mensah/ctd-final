import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
