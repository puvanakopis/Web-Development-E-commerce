import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 Not Found</h1>
      <p className="notfound-message">Your visited page was not found. You may go to the home page.</p>
      <Link to="/" className="mainButton">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
