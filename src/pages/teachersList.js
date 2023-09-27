import React from "react";
import { Button } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";

const teachers = [
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  {
    name: "Jackson",
    city: "New York",
    img: "./images/bpolo.webp",
  },
  // Add more teacher data here
];

const TeachersList = () => {
  const theme = {
    left: {
      backgroundColor: "#EEF4FA",
    },
    div: {
      position: "absolute",
      zIndex: "2",
      bottom: "0%",
      left: "2%",
      color: "white",
    },
    main: {
      position: "relative",
      backgroundColor: "red",
    },
    overlay: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  rgba(0, 0, 0, 0.5))",
      zIndex: "1",
    },
    filter: {
      backgroundColor: "#31A551",
      color: "white",
      border: "none",
    },
  };

  return (
    <div className="d-flex justify-content-around py-5 ">
      <div className="col-md-4 d-none d-lg-block col-lg-2 px-3 ">
        <div style={theme.left} className="px-3 py-3 mb-4">
          <h5>Top Cities</h5>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
        </div>
        <div style={theme.left} className="px-3 py-3">
          <h4>All Cities</h4>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
          <p>lahore</p>
        </div>
      </div>
      <div className="col-md-12 col-lg-9  px-2">
        <div>
          <h3 className="">
            Find your Preferred Teacher: Browse Our Selection of Experts
          </h3>
          <Button style={theme.filter} className="mt-2">
            Filter <FaFilter />{" "}
          </Button>
        </div>

        <div className="row">
          {teachers.map((teacher, index) => (
            <div key={teacher.name} className="col-12 col-sm-6 col-md-4 py-3">
              <div style={theme.main} className="bg-sm-info">
                <img className="w-100" src={teacher.img} alt={teacher.name} />
                <div style={theme.overlay}></div>
                <div style={theme.div}>
                  <p className="h5">{teacher.name}</p>
                  <p>{teacher.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersList;
