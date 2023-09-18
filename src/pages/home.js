import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { GrGallery } from "react-icons/gr";
import { PiVideoFill } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiFillEye, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import styles from "../styles/home.module.css";
import { viewAllProfilesAction } from "../store/Actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { API_URLS } from "../apiConfig";
const Home = () => {
  const profiles = useSelector((state) => state.allProfiles.allProfiles);
  useEffect(() => {
    dispatch(viewAllProfilesAction());
  }, []);
  console.log(profiles, "homeProfile");


  const theme = {
    main: {
      backgroundColor: "#EEF4FA",
      marginBottom: "18px",
    },
    image: {
      width: "125px",
      height: "150px",
    },
    icn: {
      backgroundColor: "#9DB5CD",
      margin: "5px",
      padding: "5px 8px",
      fontSize: "15px",
    },
    btn: {
      backgroundColor: "rgb(245, 93, 2)",
      border: "none",
      padding: "4px 8px",
      marginLeft: "2px",
      marginBottom: "20px",
    },
    btn2: {
      backgroundColor: "#31A551",
      borderRadius: "10px",
      color: "white",
      border: "none",
    },

    img: {
      height: "200px",
    },
    trend: {
      backgroundColor: "#31A551",
      color: "white",
      border: "none",
    },
    sub: {
      color: "#31A551",
    },
  };

  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const itemsPerPage = 4;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;
  const totalPages = Math.ceil(profiles.length / itemsPerPage);

  return (
    <>
      <Container className="pb-5">
        <Container
          style={theme.main}
          className={`d-lg-flex flex-lg-column justify-content-lg-between py-3 mt-5 ${
            windowWidth < 992 ? "show-more" : ""
          }`}
        >
          <h2> Discover Home-to-Home Teachers Right Here</h2>
          <div className="d-flex justify-space-between mt-3 ">
            <div className="col-12 d-flex justify-content-between col-lg-3 px-3">
              <div>
                <p>Manchester</p>
                <p>Manchester</p>
                <p>Manchester</p>
                <p>Manchester</p>
                <p>Manchester</p>
              </div>
              <div>
                <p>100</p>
                <p>200</p>
                <p>300</p>
                <p>400</p>
                <p>500</p>
              </div>
            </div>
            {windowWidth > 992 && (
              <>
                <div className="col-12 d-flex justify-content-between col-lg-3 px-3">
                  <div>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                  </div>
                  <div>
                    <p>100</p>
                    <p>200</p>
                    <p>300</p>
                    <p>400</p>
                    <p>500</p>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between col-lg-3 px-3">
                  <div>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                  </div>
                  <div>
                    <p>100</p>
                    <p>200</p>
                    <p>300</p>
                    <p>400</p>
                    <p>500</p>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-between col-lg-3 px-3">
                  <div>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                    <p>Manchester</p>
                  </div>
                  <div>
                    <p>100</p>
                    <p>200</p>
                    <p>300</p>
                    <p>400</p>
                    <p>500</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {windowWidth < 992 && showMore && (
            <>
              <div className="col-12 d-flex justify-content-between col-lg-2 px-3">
                <div>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                </div>
                <div>
                  <p>100</p>
                  <p>200</p>
                  <p>300</p>
                  <p>400</p>
                  <p>500</p>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-between col-lg-2 px-2">
                <div>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                </div>
                <div>
                  <p>100</p>
                  <p>200</p>
                  <p>300</p>
                  <p>400</p>
                  <p>500</p>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-between col-lg-2 px-2">
                <div>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                  <p>Manchester</p>
                </div>
                <div>
                  <p>100</p>
                  <p>200</p>
                  <p>300</p>
                  <p>400</p>
                  <p>500</p>
                </div>
              </div>
            </>
          )}
        </Container>
        {windowWidth < 992 && (
          <div className="d-flex justify-content-center mt-2">
            <p onClick={toggleShowMore}>
              {showMore ? "See Less Results" : "See More Results"}
            </p>
          </div>
        )}

        <div className="d-lg-flex justify-content-lg-between">
         {
          profiles ? 
           <div className="col-lg-8">
            
            {profiles.slice(startIndex, endIndex).map((data, index) => (
              <div key={index} className={styles.profile}>
                <div className="d-flex flex-column" key={index}>
                  <img
                    style={theme.image}
                    className="rounded"
                    src={`${API_URLS}${data.selectedImageFiles[0]}`}
                    alt="Profile Image"
                    onError={(e) =>
                      console.error("Image load error:", e.message)
                    }
                  ></img>

                  <div className={styles.view}>
                    <p>
                      <GrGallery /> <span>4</span>{" "}
                    </p>
                    <p>
                      {" "}
                      <PiVideoFill /> <span>4</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="w-100 px-2 lh-1 ">
                  <div className="d-flex">
                    <h6>{data.name}</h6>
                    <h5>{data.city}</h5>
                  </div>
                  <p>Learning together, growing together</p>
                  <div
                    className="d-lg-flex w-50  justify-content-lg-between
"
                  >
                    <p className="text-nowrap">
                      <FaLocationDot style={theme.sub} />
                      <span>{data.city}</span>{" "}
                    </p>
                    <p className="text-nowrap">
                      <ImBooks style={theme.sub} />{" "}
                      <span>{data.specialityDegree}</span>{" "}
                    </p>
                    <p className="text-nowrap">
                      <AiFillClockCircle style={theme.sub} />{" "}
                      <span>Available</span>{" "}
                    </p>
                  </div>
                  <p className="d-none d-lg-block lh-sm">{data.aboutUs}</p>
                  <div className="d-lg-flex justify-content-end ">
                    <Button>Show Number</Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="d-flex justify-content-center mt-3">
              {pageNumber > 1 && (
                <Button
                  style={theme.btn}
                  onClick={() => {
                    setPageNumber(pageNumber - 1);
                  }}
                >
                  <BiChevronLeft />
                </Button>
              )}

              {/* Render numeric pagination */}
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  style={{
                    ...theme.btn,
                    backgroundColor:
                      pageNumber === index + 1
                        ? "#31A551"
                        : theme.btn.backgroundColor,
                    color: pageNumber === index + 1 ? "white" : theme.btn.color,
                  }}
                  key={index}
                  onClick={() => {
                    setPageNumber(index + 1);
                  }}
                >
                  {index + 1}
                </Button>
              ))}

              {pageNumber < totalPages && (
                <Button
                  style={theme.btn}
                  onClick={() => {
                    setPageNumber(pageNumber + 1);
                  }}
                >
                  <BiChevronRight />
                </Button>
              )}
            </div>
          </div> :
          "There is no Profile Created yet"
         }
          <div className="d-flex flex-column col-lg-4 px-lg-3">
            <div className={styles.trend}>Trending Videos</div>
            <div className={styles.video}>
              <img
                className="w-100"
                style={theme.img}
                src="/images/bpolo.webp"
              ></img>
              <h6>STEM time with John</h6>
              <p>
                {" "}
                <FaUser /> <span className="px-1">John</span>{" "}
              </p>
              <div className="d-flex ">
                <p>
                  {" "}
                  <AiFillEye /> <span>16,215</span>{" "}
                </p>
                <p className="px-2">
                  {" "}
                  <AiFillClockCircle /> <span>2 days ago</span>{" "}
                </p>
              </div>
            </div>
            <div className={styles.video}>
              <img
                className="w-100"
                style={theme.img}
                src="/images/bpolo.webp"
              ></img>
              <h6>STEM time with John</h6>
              <p>
                {" "}
                <FaUser /> <span className="px-1">John</span>{" "}
              </p>
              <div className="d-flex ">
                <p>
                  {" "}
                  <AiFillEye /> <span>16,215</span>{" "}
                </p>
                <p className="px-2">
                  {" "}
                  <AiFillClockCircle /> <span>2 days ago</span>{" "}
                </p>
              </div>
            </div>
            <div className={styles.video}>
              <img
                className="w-100"
                style={theme.img}
                src="/images/bpolo.webp"
              ></img>
              <h6>STEM time with John</h6>
              <p>
                {" "}
                <FaUser /> <span className="px-1">John</span>{" "}
              </p>
              <div className="d-flex ">
                <p>
                  {" "}
                  <AiFillEye /> <span>16,215</span>{" "}
                </p>
                <p className="px-2">
                  {" "}
                  <AiFillClockCircle /> <span>2 days ago</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
