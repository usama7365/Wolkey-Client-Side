
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { useRouter } from "next/router";
import Link from "next/link";

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
  link:{
    textDecoration:"none",
    color:"black"
  }
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
        <Link style={theme.link} href='/photos'>
        <p>Photos</p>
        </Link>
        <p>Reviews</p>
        <p>Videos</p>
        <h5>Account</h5>
        <Link style={theme.link} href='/settings'>
        <p>Settings</p>
        </Link>
        <Link style={theme.link} href='/messages'>
        <p>Messages</p>
        </Link>
        <p>Notifications</p>
       <Link style={theme.link} href='/invoice'>
       <p>Invoice</p>
       </Link>
       <Link style={theme.link} href='/balance'>
       <p>Balance</p>
       </Link>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default SideDiv;
