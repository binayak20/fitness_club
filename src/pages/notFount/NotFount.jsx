import { Link } from "react-router-dom";
import "./notFound.css";

const NotFount = () => {
  return (
    <section>
      <div className="container notfount__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </section>
  );
};

export default NotFount;
