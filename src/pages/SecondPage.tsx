import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div
      style={{
        height: "500vh",
      }}
    >
      <h1>Second Page</h1>
      <a href="/">Go back to the first page</a>
      <Link to="/">Go back to the first page</Link>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default SecondPage;
