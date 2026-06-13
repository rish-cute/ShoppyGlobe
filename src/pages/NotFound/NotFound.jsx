import "../../styles/NotFound.css";

// 404 page component
function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-code">
        404
      </div>

      <h1 className="notfound-title">
        Page Not Found
      </h1>

      <p className="notfound-text">
        The page you are looking for does not
        exist or has been moved.
      </p>
    </div>
  );
}

export default NotFound;