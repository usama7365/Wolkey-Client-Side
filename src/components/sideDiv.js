import React from "react";
import { RxDashboard } from "react-icons/rx";

const theme = {
  bar: {
    backgroundColor: "#EEF4FA",
    fontSize: "14px",
    cursor: "pointer",
    // position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    borderRadius: "5px",
    border: "none",
  },
};

const SideDiv = () => {
  return (
    <div style={theme.bar} className="col-2 d-none d-lg-block    px-3 py-2 ">
      <div>
        <p className="d-flex align-items-center">
          {" "}
          <RxDashboard /> <span className="px-1">Dashboard</span>{" "}
        </p>
        <h5>Management</h5>
        <p>Advertisement</p>
        <p>Photos</p>
        <p>Reviews</p>
        <p>Videos</p>
        <h5>Account</h5>
        <p>Settings</p>
        <p>Messages</p>
        <p>Notifications</p>
        <p>Invoice</p>
        <p>Balance expenses</p>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default SideDiv;
