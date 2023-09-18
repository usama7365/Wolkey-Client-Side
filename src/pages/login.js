import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPasswordAction,
  userLoginAction,
} from "../store/Actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false); // Added loading state for password reset

 
  const dispatch = useDispatch();
  const router = useRouter();
  const [response, setResponse] = useState(null);


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordResetModal = () => {
    setShowPasswordResetModal(!showPasswordResetModal);
  };

 

  const handleLogin =async () => {
    if (email === "" || password === "") {
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
    } else {
      setLoading(true);
      try {
        const loginResponse= await dispatch(
          userLoginAction({
            email: email,
            password: password,
          })
        )
        setLoading(false);
        if (typeof window !== "undefined") {
          const storedResponse = localStorage.getItem("auth-user");
          if (storedResponse) {
            const parsedResponse = JSON.parse(storedResponse);
            if (parsedResponse && parsedResponse.profileId && parsedResponse.role === "teacher" ) {
              router.push('/viewProfile');
            } else if (parsedResponse.role === "teacher") {
              router.push("/profileform");
            } else if (parsedResponse.role === "agency") {
              router.push("/agencyProfile");
            }
          }
        }
        
    
       
       
      } catch (error) {
        setLoading(false);
        // Handle error here
       
      }
    }
  };


  const handleResetPassword = async () => {
    if (email === "") {
      toast.error("Please fill the Email input", {
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
      setResetPasswordLoading(true); // Set loading state to true for password reset
      try {
        await dispatch(forgetPasswordAction(email));
        setResetPasswordLoading(false); // Set loading state back to false after password reset attempt
        handleTogglePasswordResetModal(); // Close the password reset modal after successful reset
      } catch (error) {
        setResetPasswordLoading(false); // Set loading state back to false if password reset fails
        toast.error("Password reset failed. Please try again.", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const theme = {
    btn: {
      margin: "auto",
    },
    bg: {
      backgroundColor: "rgb(245, 93, 2)",
    border: "none",
    height:"40px",
    
    },
  };

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="d-flex flex-column flex-md-row py-5  mt-md-3 px-lg-5 justify-content-md-around ">
        <div className="login px-3 py-3 col-md-5 d-flex flex-column d-md-block  ">
          <h3>Login</h3>
          <Form className="mt-3">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={handleEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={handlePassword}
              />
            </Form.Group>
          </Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col>
              <Form.Check label="Remember me"  />
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-between">
            <a
              className="cursor-pointer"
              onClick={handleTogglePasswordResetModal}
            >
              Forgot your Password
            </a>
            <Link href="/banner" passHref>
              <p>Create Account</p>
            </Link>
          </div>
          <div style={theme.btn}>
            <Button
              style={theme.bg}
              variant="primary"
              className="mt-3 px-5"
              active
           
             
              onClick={handleLogin}
            >
              {loading ? <Spinner animation="border" role="status" /> : "Login"}
            </Button>
          </div>
        </div>
        <div className="col-12 col-md-6 ">
        <div className="d-flex  justify-content-center  flex-column px-3 align-items-center mt-4  align-self-start align-items-md-start">
          <h3>Register as an adviser</h3>
          <p className="text-center text-md-start">
            Create an account as a teacher or teacher association and bring
            yourself to the attention of thousands of “Company name” visitors
            every day.
          </p>
          <Button
          style={theme.bg}
          
        >
          <Link href="/advisorSignup" passHref>
              <p>Register as a adviser</p>
            </Link>
         
        </Button>
        </div>
        <div className="d-flex  justify-content-center  flex-column px-3 align-items-center mt-4  align-self-start align-items-md-start">
          <h3>Register as an Agency </h3>
          <p className="text-center text-md-start">
            Create an account as a teacher or teacher association and bring
            yourself to the attention of thousands of “Company name” visitors
            every day.
          </p>
          <Button
          style={theme.bg}
          
        >
          <Link href="/banner" passHref>
              <p>Register as a agency</p>
            </Link>
         
        </Button>
        </div>
        </div>
        
      </div>
      

      <Modal
        show={showPasswordResetModal}
        onHide={handleTogglePasswordResetModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter your email to reset your password:</p>
          <Form.Group className="mb-3" controlId="formGroupResetEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              onChange={handleEmail}
              placeholder="Enter email"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTogglePasswordResetModal}>
            Cancel
          </Button>
          <Button
            style={theme.bg}
            onClick={handleResetPassword}
            variant="primary"
            disabled={resetPasswordLoading} // Disable the button while password reset is in progress
          >
            {resetPasswordLoading ? (
              <Spinner animation="border" size="sm" /> // Show spinner while reset password is in progress
            ) : (
              "Reset Password"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
