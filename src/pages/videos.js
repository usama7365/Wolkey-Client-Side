import React from "react";
import styles from "../styles/home.module.css";
import { AiFillEye, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import TabDiv from "../components/Tabs";

const Videos = () => {
  const Data = [
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
    {
      img: "./images/bpolo.webp",
      title: "Stem time with John",
      name: "John",
      views: "16,215 ",
      day: "2 days ago",
    },
  ];

  const theme = {
    left: {
      backgroundColor: "#EEF4FA",
    },
    vid: {
      backgroundColor: "#31A551",
      color: "white",
      border: "none",
    },
  };

  return (
    <>
      <TabDiv/>
    <div className="d-flex overflow-hidden">
      <div className="col-md-4 d-none d-lg-block col-lg-2 px-3 py-4 ">
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

      <div className="mt-3 px-2">
        <div className="mt-2 d-sm-flex  justify-content-between   w-75 bg-sm-info">
          <p>Psychology</p>
          <p>Biology</p>
          <p>Literature</p>
          <p>Philosphy</p>
          <p>Micro</p>
        </div>

        <div style={theme.vid} className="py-3 px-2">
          New Videos
        </div>

        <div className="row d-flex justify-content-around   mb-3 mt-3">
          {Data.map((data, index) => (
            <div
              key={index}
              className={`col-12 col-sm-5 col-md-4 col-lg-3  ${styles.video}`}
            >
              <img className="w-100" src={data.img} alt={data.title}></img>
              <h6>{data.title}</h6>
              <p>
                <FaUser /> <span className="px-1">{data.name}</span>{" "}
              </p>
              <div className="d-flex">
                <p>
                  <AiFillEye /> <span>{data.views}</span>{" "}
                </p>
                <p className="px-2">
                  <AiFillClockCircle /> <span>{data.day}</span>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={theme.vid} className=" py-3 px-2">
          New Videos
        </div>

        <div className="row d-flex justify-content-around  py-3">
          {Data.map((data, index) => (
            <div
              key={index}
              className={`col-12 col-sm-5 col-md-4 col-lg-3  ${styles.video}`}
            >
              <img className="w-100" src={data.img} alt={data.title}></img>
              <h6>{data.title}</h6>
              <p>
                <FaUser /> <span className="px-1">{data.name}</span>{" "}
              </p>
              <div className="d-flex">
                <p>
                  <AiFillEye /> <span>{data.views}</span>{" "}
                </p>
                <p className="px-2">
                  <AiFillClockCircle /> <span>{data.day}</span>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Videos;
