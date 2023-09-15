import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignupAction } from "../store/Actions/userAction";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import { BsCheck } from "react-icons/bs";

const AdvisorSignup = () => {
  const [loading, setLoading] = useState(false);

  const msg = useSelector((state) => state.userSignup);
  

  const btn = {
    margin: "auto",
  };
  const bg = {
    backgroundColor: "rgb(245, 93, 2)",
    border: "none",
  };
  const icn = {
    color: "rgb(245, 93, 2)",
  };

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [displayName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignup = async () => {
    if (!rememberMe) {
      toast.error("Please check 'Remember Me'", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (displayName === "" || email === "" || password === "" || rePassword === "") {
      toast.error("All inputs must be filled", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (password !== rePassword) {
      toast.error("Your password and Repassword are different", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setLoading(true);
      try {
        await dispatch(
          userSignupAction({
            displayName: displayName,
            email: email,
            password: password,
            role:"advisor"
          })
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        
      }
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="d-flex flex-column flex-md-row py-5 mt-md-3 px-lg-5 justify-content-md-around ">
        <div className="login px-3 py-3 col-md-5 d-flex flex-column d-md-block  ">
          <h3>Create an Account</h3>
          <Form className="mt-3">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" onChange={handleEmail} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control onChange={handleName} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handlePassword} required type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupRePassword">
              <Form.Label>Retype Password</Form.Label>
              <Form.Control onChange={handleRePassword} required type="password" />
            </Form.Group>
          </Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col>
              <Form.Check label="I’ve read the privacy statement and agree to the terms and conditions." onChange={handleRememberMe} />
            </Col>
          </Form.Group>
          <Link href="/login" passHref>
            <p>I already have an account</p>
          </Link>
          <div style={btn}>
            <Button
              style={bg}
              variant="primary"
              className="mt-3 px-5"
              onClick={handleSignup}
              disabled={!rememberMe || loading}
              active
            >
              {loading ? (
                <Spinner animation="border" role="status" />
              ) : (
                'Signup'
              )}
            </Button>
          </div>
        </div>
        <div className=" col-12 col-md-6 justify-content-center flex-column px-3 align-items-center mt-4  align-self-start align-items-md-start">
        <h4>I m advisor</h4>
        <b style={icn}>FREE</b>
        <p className="mt-3">
          Your registration for an account on &quo;WEBSITE NAME&quo; is arranged within
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
            The largest home to home teachers site in the &quo;COUNTRY NAME&quo;.
          </span>{" "}
          <br />
          <BsCheck style={icn} />
          <span>100%</span> <br />
        </div>
         
        </div>
      </div>
    </>
  );
};

export default AdvisorSignup;
