import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsEnvelopeFill , BsFillTelephoneFill } from "react-icons/bs";

const Profile2 = () => {
  const theme = {
    img: {
      width: "85%",
      position: "relative",
    },
    img2: {
      width: "50%",
      padding:"3px",
      borderRadius:"10px"
      
      
    },
    main: {
      backgroundColor:"#EEF4FA",
      marginBottom:"10px"
    },
    btn: {
      position: "absolute",
      top:"10%",
      
    },
    relative: {
      position: "relative",
    },
    btn1:{
      borderRadius:"10px"
    },
    btn2:{
      backgroundColor:"#31A551",
      borderRadius:"10px"
    },

  };

  return (
    <div className="px-2 py-2">
      <h6>
        Mia | <span>Now Available</span>{" "}
      </h6>
      <p>
        <FaLocationDot /> <span>Amsterdem</span>{" "}
      </p>

      <div className="d-flex justify-content-center">
        <img style={theme.img} src="\images\bpolo.webp"></img>
      </div>
      <div className="d-flex justify-content-center">
        <div
          style={theme.img}
          className="d-flex  justify-content-center flex-wrap h-auto py-2"
        >
          <img style={theme.img2} src="\images\bpolo.webp"></img>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
          <div style={theme.btn} className="bg-white w-100 ">
            <div className="d-flex justify-content-around align-items-center text-nowrap">
              <button style={theme.btn1} className="py-2 px-2 d-flex align-items-center bg-white  "> <span className="px-2"> <BsEnvelopeFill/>  </span>Send Message </button>
              <button style={theme.btn2} className="px-2 py-2 d-flex align-items-center "> <span className="px-2"> <BsFillTelephoneFill className="text-white"/>  </span>Send Message </button>
            </div>
          </div>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
          <img style={theme.img2} src="\images\bpolo.webp"></img>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>Characteristic</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>Prices</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            1 hours/day <span>100$</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            2 hours/day <span>150$</span>{" "}
          </h6>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>About me</h4>
        <div>
          <p className="">
            Experienced teacher providing tailored, flexible education to
            children from home to home. Strong focus on creating engaging lesson
            plans to suit each of child learning style and needs. Personalized
            approach to empower children to reach their full potential.
          </p>
        </div>
      </div>
      <div className="py-2 px-3" style={theme.main}>
        <h4>Characteristic</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            {" "}
            Education <span>American</span>{" "}
          </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
          <h6> Education </h6>
        </div>
      </div>

      <div className="py-2 px-3" style={theme.main}>
        <h4>Characteristic</h4>
        <div>
          <h6 className="d-flex justify-content-between w-75">
            Monday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Tuesday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Wednesday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Thursday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Friday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Saturday <span>American</span>{" "}
          </h6>
          <h6 className="d-flex justify-content-between w-75">
            Sunday <span>American</span>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
