import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewAgencyProfileAction } from "../../store/Actions/profileAction";
import { Container } from "react-bootstrap";

const AgencyProfile = () => {
  const theme = {
    first: {
      border: "5px solid red",
      height: "200px",
    },
  };


  const dispatch = useDispatch();
  const agencyData = useSelector(
    (state) => state?.viewAgencyProfile?.userInfo?.agencyProfile
  );

  const authUserString =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;

const agencyProfileIdString =
  typeof window !== "undefined" && localStorage.getItem("agencyProfileId");

const agencyProfileId = agencyProfileIdString
  ? JSON.parse(agencyProfileIdString)
  : null;

  console.log(agencyProfileId , "agg")

 
  useEffect(() => {
    if (authUserString) {
      const token = authUserString ? authUserString.token : null;
      const fetchData = async () => {
        if (token || agencyProfileId) {
          await dispatch(viewAgencyProfileAction(token, agencyProfileId));
        }
      };
      fetchData();
    }
  }, [dispatch, agencyProfileId]);

  return (
    <Container className="py-5">
      <div  style={theme.first}></div>
      <div className="mt-5">
        <h4>{authUserString?.name}</h4>
        <p>{authUserString?.email}</p>
      </div>
      {agencyData && (
        <>
          <h4 className="mt-5">Agency Profile</h4>
          <div className="d-md-flex justify-content-md-between mt-4">
            <div className="h6">
              <p>Company Name: {agencyData?.companyName}</p>
              <p>PhoneNumber : {agencyData?.PhoneNumber}</p>
              <p>city : {agencyData?.city}</p>
              <p>btwNumber: {agencyData?.btwNumber}</p>
              <p>Contact: {agencyData?.contact}</p>
            </div>
            <div className="h6">
              <p>kvkNumber : {agencyData?.kvkNumber}</p>
              <p>zipCode : {agencyData?.zipCode}</p>
              <p>houseNumber: {agencyData?.houseNumber}</p>
              <p>streetName : {agencyData?.streetName}</p>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default AgencyProfile;
