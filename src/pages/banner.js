import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCheck } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useRouter } from "next/router";

const Banner = () => {
  const maindiv = {
    height: "auto",
    width: "100%",
    paddingBottom: "100px",
    paddingTop: "30px",
  };

  const side = {
    height: "auto",
  };

  const icn = {
    color: "rgb(245, 93, 2)",
  };
  const bg = {
    backgroundColor: "rgb(245, 93, 2)",
    border: "none",
  };

  const [loggingIn, setLoggingIn] = useState(false);
  const router = useRouter();

  const handleLoginRedirect = () => {
    setLoggingIn(true);
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  return (
    <div
      className="flex-column d-flex flex-md-row align-items-md-center px-lg-5"
      style={maindiv}
    >
      <div className="left-side px-3 mt-5 px-lg-5" style={side}>
        <h4>I am a teacher</h4>
        <b style={icn}>FREE</b>
        <p className="mt-3">
          Your registration for an account on &quot;WEBSITE NAME&quot; is arranged within
          a few moments and your information will be treated discretely.
        </p>
        <div className="lh-lg">
          <BsCheck style={icn} />
          <span>More than 2.4 million visitors every month.</span> <br />
          <BsCheck style={icn} />
          <span>An extensive advertisement for all your information.</span>{" "}
          <br />
          <BsCheck style={icn} />
          <span>Visitors can contact you for free and quickly.</span> <br />
          <BsCheck style={icn} />
          <span>
            The largest home to home teachers site in the &quot;COUNTRY NAME&quot;.
          </span>{" "}
          <br />
          <BsCheck style={icn} />
          <span>100%</span> <br />
        </div>
        <Button
          style={bg}
          variant="primary"
          className="mt-3"
          active
          onClick={handleLoginRedirect}
          disabled={loggingIn}
        >
          {loggingIn ? (
            <Spinner animation="border" size="sm" />
          ) : (
            "Register as a teacher"
          )}
        </Button>
      </div>
      <div className="right-side px-3 mt-5" style={side}>
        <h4>I’m an agency that has multiple teachers</h4>
        <b style={icn}>FREE</b>
        <p className="mt-3">
          Your registration for an account on &quot;Company name&quot; is arranged within
          a few moments and your information will be treated discretely.
        </p>
        <div className="lh-lg">
          <BsCheck style={icn} />
          <span>More than 2.4 million visitors every month.</span> <br />
          <BsCheck style={icn} />
          <span>An extensive advertisement for all your information.</span>{" "}
          <br />
          <BsCheck style={icn} />
          <span>Visitors can contact you for free and quickly.</span> <br />
          <BsCheck style={icn} />
          <span>
            The largest home to home teachers site in the &quot;COUNTRY NAME&quot;.
          </span>{" "}
          <br />
          <BsCheck style={icn} />
          <span>100%</span> <br />
        </div>
        <Button style={bg} variant="primary" className="mt-3" active>
          Register as an agency
        </Button>
      </div>
    </div>
  );
};

export default Banner;
