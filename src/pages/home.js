import React, { useState, useEffect } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { GrGallery } from "react-icons/gr";
import { PiVideoFill } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Spinner } from "react-bootstrap";

import { AiFillEye, AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import styles from "../styles/home.module.css";
import {
  viewAllProfilesAction,
  viewProfileAction,
} from "../store/Actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { API_URLS } from "../apiConfig";
import { useRouter } from "next/router";
import Link from "next/link";
import AdvanceSearch from "../components/advanceSearch";
import Filter from "../components/filter";

const Home = () => {
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
  ];

  useEffect(() => {
    dispatch(viewAllProfilesAction());
  }, []);

  const profiles = useSelector((state) => state.allProfiles?.allProfiles);

  // Call the filterProfiles function with the profiles from the Redux store

  console.log(profiles, "homeProfile");

  const router = useRouter();
  const { _id } = router.query;

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const authUserString =
    typeof window !== "undefined" && localStorage.getItem("auth-user")
      ? JSON.parse(localStorage.getItem("auth-user"))
      : null;
  // console.log(authUserString, "auth");
  const getDetailProfile = (_id) => {
    if (authUserString && authUserString.token) {
      dispatch(viewProfileAction(_id));
      router.push(`/viewProfile/${_id}`);
    } else {
      handleShowModal();
    }
  };
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
    bg: {
      backgroundColor: "rgb(245, 93, 2)",
      border: "none",
    },
    pointer: {
      cursor: "pointer",
    },
  };

  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const filterProfiles = (profiles, selectedFilters) => {
    console.log(profiles, selectedFilters, "././.");
    return profiles.filter((profile) => {
      for (const filterKey in selectedFilters) {
        if (Array.isArray(selectedFilters[filterKey])) {
          if (
            !selectedFilters[filterKey].every((value) =>
              profile[filterKey].includes(value)
            )
          ) {
            return false;
          }
        } else {
          if (profile[filterKey] !== selectedFilters[filterKey]) {
            return false;
          }
        }
      }
      return true;
    });
  };

  const handleFilterChange = (filterValues) => {
    setSelectedFilters(filterValues);
  };

  useEffect(() => {
    const filteredProfiles = filterProfiles(profiles, selectedFilters);
    setFilteredProfiles(filteredProfiles);
  }, [profiles, selectedFilters]);

  filterProfiles(profiles);

  const dispatch = useDispatch();

  const itemsPerPage = 6;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const toggleAdvanceSearch = () => {
    setShowAdvanceSearch(!showAdvanceSearch);
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

  const transitionStyle = {
    transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
  };

  return (
    <>
      <Container>
        <p onClick={toggleAdvanceSearch} className="col-1">
          {" "}
          <Filter />{" "}
        </p>
        {/* Use the inline style for the transition */}
        <div
          style={{
            ...transitionStyle,
            opacity: showAdvanceSearch ? 1 : 0,
            height: showAdvanceSearch ? "auto" : 0,
            overflow: showAdvanceSearch ? "visible" : "hidden",
          }}
        >
          {showAdvanceSearch && (
            <AdvanceSearch
              onFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
            />
          )}
        </div>
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
        <div className="d-lg-flex justify-content-lg-around ">
          {profiles ? (
            profiles.length === 0 ? (
              <div className="col-9 d-flex justify-content-center mt-3">
                <p>No profiles found</p>
              </div>
            ) : (
              <div style={theme.pointer} className="col-lg-9 pe-auto">
                {filteredProfiles.map((data, index) => (
                  <div
                    onClick={() => {
                      getDetailProfile(data._id);
                    }}
                    key={index}
                    className={styles.profile}
                  >
                    <div className="d-flex flex-column" key={index}>
                      {data.selectedImageFiles[0] ? (
                        <img
                          style={theme.image}
                          className="rounded"
                          src={`${API_URLS}${data.selectedImageFiles[0]}`}
                          alt="User Icon"
                          onError={(e) =>
                            console.error("Image load error:", e.message)
                          }
                        />
                      ) : (
                        <div className="user-icon">User Icon</div>
                      )}
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
                      <div className="d-lg-flex w-50  justify-content-lg-between">
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
                      <div className="d-lg-flex justify-content-end">
                        <button style={theme.btn2} className="px-3 py-2">
                          Show Number
                        </button>
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
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      style={{
                        ...theme.btn,
                        backgroundColor:
                          pageNumber === index + 1
                            ? "#31A551"
                            : theme.btn.backgroundColor,
                        color:
                          pageNumber === index + 1 ? "white" : theme.btn.color,
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
              </div>
            )
          ) : (
            <div className="d-flex bg-danger justify-content-center mt-3">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          <div className={`col-lg-3 mt-2 mb-5 ${styles.videos}`}>
            <div className={` ${styles.trend}`}>Trending Videos</div>

            <div className="row d-flex flex-lg-column col-13 mt-3  justify-content-center">
              {Data.map((data, index) => (
                <div
                  key={index}
                  className={`col-12 col-sm-6 col-lg-12 ${styles.video}`}
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
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            First login to your account to see the profiles.
          </Modal.Body>
          <Modal.Footer>
            <Button href="/login" style={theme.bg} variant="secondary">
              Login
            </Button>
            {/* You can add a button here to navigate to the login page */}
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Home;
