import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../store/Actions/userAction";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPage = () => {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const reset = useSelector((state) => state.resetPassword);
  console.log(reset, "resetState");

  const router = useRouter();
  const token = router.query.token;
  console.log(token, "tokenn");
  const dispatch = useDispatch();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const theme = {
    main: {
      margin: "auto",
      padding: "5% 0",
    },
    bg: {
      backgroundColor: "rgb(245, 93, 2)",
      border: "none",
    },
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Your new password does not match with confirm password", {
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
    } else {
      setLoading(true);
      try {
        dispatch(resetPasswordAction({ token, newPassword }));
        setLoading(false);
        router.push("/login");
      } catch (error) {
        setLoading(false);
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

  return (
    <>
      <div
        className="col-12 px-2 px-sm-5 col-md-6 col-lg-5 "
        style={theme.main}
      >
        <h2>Reset Your Password</h2>
        <form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              onChange={handleConfirmPassword}
            />
          </Form.Group>

          <Button
            style={theme.bg}
            variant="primary"
            className="mt-3 px-5"
            onClick={handleResetPassword}
            active
          >
            {loading ? <Spinner animation="border" role="status" /> : "Save"}
          </Button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ResetPage;
