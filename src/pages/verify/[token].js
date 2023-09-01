import React, { useEffect} from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailAction } from "../../store/Actions/userAction";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const VerificationPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const res = useSelector((state) => state.verifyEmail);

  useEffect(() => {
    const token = router.query.token;
    console.log(token, res, "tokenn");

    if (token) {
      dispatch(verifyEmailAction(token));
    }
  }, [router.query.token , dispatch , res]);
  
  const theme = {
    font: {
      fontSize: "80px",
    },
    bg:{
      backgroundColor: "rgb(245, 93, 2)",
      border: "none",
    },
    leading:{
    padding:"80px 0px",
    lineHeight:"80px"
    }
  };



  

  return (
    <div style={theme.leading} className="main d-flex flex-column align-items-center mt-4">
      {res.msg ? (
        <>
          <FcCheckmark style={theme.font} />
        <h3>  {res.msg}</h3>
          <Link href="/login" passHref>
            <Button style={theme.bg}>Login</Button>
          </Link>
        </>
      ) : (
        <>
          <FcCancel style={theme.font} />
          <h3>{res.error}</h3>
          <Link href="/signup" passHref>
            <Button style={theme.bg}>Signup</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default VerificationPage;
