import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FcPlus } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import {
  profileFormAction,
  viewProfileAction,
} from "../store/Actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Card, InputGroup } from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

// import ProtectedProfileRoute from '../components/ProtectedProfileRoute';

const ProfileForm = () => {
  const profile = useSelector((state) => state.createProfile);
  const [response, setResponse] = useState(null);
  console.log(profile, "profileState");
  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      const storedResponse = localStorage.getItem("auth-user");
      if (storedResponse) {
        // Parse the stored response as JSON
        const parsedResponse = JSON.parse(storedResponse);
        setResponse(parsedResponse);
      }
    }
  }, []);
  console.log(response, "tokk");

  const router = useRouter();

  const theme = {
    icn: {
      position: "absolute",
      bottom: "10",
      right: "10",
    },
    main: {
      position: "relative",
    },
    font: {
      fontSize: "20px",
      paddingLeft: "10px",
      cursor: "pointer",
    },
    card: {
      height: "170px",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "11px",
      border: "1px solid grey",
      borderRadius: "10px",
      backgroundColor: "rgb(234 , 234 , 234 )",
      marginTop: "30px",
    },
    img: {
      width: "120px",
      height: "130px",
    },
    info: {
      height: "130px",
      paddingLeft: "10px",
    },
    btn: {
      backgroundColor: "#31A551",
      fontSize: "11px",
    },
    title: {
      fontSize: "11px",
    },
    btn2: {
      backgroundColor: "rgb(245, 93, 2)",
      border: "none",
      marginTop: "15px",
    },
    time: {
      fontSize: "50px",
    },
  };

  const [subjectName, setSubjectName] = useState([]);
  const [selectedFileNames, setSelectedFileNames] = useState([]);
  const [subject, setSubject] = useState("");
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [serviceNames, setServiceNames] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [prices, setPrices] = useState({
    "15_minutes": null,
    "30_minutes": null,
    "45_minutes": null,
    "1_hour": null,
    "1_hour_30_minutes": null,
    "2_hours": null,
  });

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    city: "",
    gender: "",
    dateOfBirth: "",
    aboutUs: "",
    phoneNumber: 0,
    age: 0,
    subjectName: [],
    serviceNames: [],
    selectedFileNames: [],
    selectedVideoFile: null,
    Nationality: "",
    education: "",
    specialityDegree: "",
    Experience: "",
    TeachingStyle: "",
    languages: [],
  });

  console.log(formData.age, "age");
  console.log(formData.Nationality, "nation");
  console.log(formData.education, "edu");
  console.log(selectedTimes, "time");
  console.log(prices, "costt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubjectChange = (e) => {
    const { value } = e.target;
    setSubject(value);
    console.log(subject);
  };

  const handleSubjectClick = () => {
    if (subject.trim() !== "") {
      setSubjectName([...subjectName, subject]);
      setSubject("");
      setFormData((prevData) => ({
        ...prevData,
        subjectName: [...prevData.subjectName, subject],
      }));
    }
  };

  const handleLanguageClick = () => {
    if (language.trim() !== "") {
      setLanguages([...languages, language]);
      setLanguage("");
      setFormData((prevData) => ({
        ...prevData,
        languages: [...prevData.languages, language],
      }));
    }
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(e.target.files);
    const fileNames = [];

    if (selectedFileNames.length + files.length <= 5) {
      for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i]);
      }
      console.log(fileNames, "filenamesss");
      setSelectedFileNames((prevFileNames) => [...prevFileNames, ...fileNames]);
      setFormData((prevData) => ({
        ...prevData,
        selectedFileNames: [...prevData.selectedFileNames, ...fileNames],
      }));
    } else {
      alert("You can select a maximum of five photos.");
    }
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      selectedVideoFile: file,
    }));
  };

  const handleServiceNameChange = (e) => {
    setServiceName(e.target.value);
  };

  const handleServiceClick = () => {
    if (serviceName.trim() !== "") {
      setServiceNames([...serviceNames, serviceName]);
      setServiceName("");
      setFormData((prevData) => ({
        ...prevData,
        serviceNames: [...prevData.serviceNames, serviceName],
      }));
    }
  };

  const handleDeleteService = (index) => {
    const updatedServiceNames = serviceNames.filter((_, i) => i !== index);
    setServiceNames(updatedServiceNames);
  };

  const handleCheckboxChange = (e) => {
    const day = e.target.value;
    if (selectedDays.includes(day)) {
      // If the day is already selected, remove it
      setSelectedDays(selectedDays.filter((d) => d !== day));
      // Remove the selected time for this day
      const updatedTimes = { ...selectedTimes };
      delete updatedTimes[day];
      setSelectedTimes(updatedTimes);

      // Update formData
      setFormData((prevData) => ({
        ...prevData,
        availabilityDays: selectedDays.filter((d) => d !== day).join(", "), // Join selected days as a comma-separated string
      }));
    } else {
      // If the day is not selected, add it
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleTimeChange = (day, time) => {
    // setSelectedTimes({ ...selectedTimes, [day]: time    });

    // Convert the time to AM/PM format
    const timeParts = time.split(":");
    const hour = parseInt(timeParts[0], 10);
    const minute = timeParts[1];
    const ampm = hour >= 12 ? "PM" : "AM";
    const ampmHour = hour > 12 ? hour - 12 : hour;

    setSelectedTimes({ ...selectedTimes, [day]: time });

    setFormData((prevData) => ({
      ...prevData,
      [day.toLowerCase()]: time, // Store the time in 24-hour format
      [`${day.toLowerCase()}AMPM`]: `${ampmHour}:${minute} ${ampm}`, // Store the time in AM/PM format
      selectedTimes: selectedTimes, // Add this line to update selectedTimes in formData
    }));
  };

  const handlePriceChange = (e, duration) => {
    const { value } = e.target;
    setPrices((prevPrices) => ({
      ...prevPrices,
      [duration]: value,
    }));
    setFormData((prevData) => ({
      ...prevData,
      prices: {
        ...prevData.prices,
        [duration]: value,
      },
    }));
  };

  const truncateText = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length <= maxLength) {
      return text;
    } else {
      const truncatedText = words.slice(0, maxLength).join(" ");
      return `${truncatedText} . . . . .`;
    }
  };

  const handleProfile = async (e) => {
    e.preventDefault();
    if (!formData) {
      alert("okk");
    }
    setIsSubmitting(true); // Set form submission status to true
    try {
      const token = response ? response.token : null;
      if (!token) {
        console.error("Token is missing.");
        return;
      }
      console.log(token, "tokennn");

      await dispatch(profileFormAction(formData, token));
      router.push("/viewProfile");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); // Reset form submission status when done
    }
  };

  return (
    // <ProtectedProfileRoute>
    <>
      <ToastContainer />

      <div className="container  mt-2 py-5">
        <h2 className="mb-3">Personal Information Form</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 mt-2 d-block d-md-flex">
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="phoneNumber">
                <Form.Label className="text-nowrap">Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3  mt-2 d-block d-md-flex">
            <Col>
              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Nationality</Form.Label>
                <Form.Control
                  name="Nationality"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="country">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="gender" className="py-3">
            <Form.Check
              inline
              label="Male"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              required
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              required
            />
            <Form.Check
              inline
              label="Other"
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Row className="mb-3  mt-2 d-block d-md-flex">
            <Col>
              <Form.Group>
                <Form.Label>Education</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  name="education"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  name="specialityDegree"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="Experience"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3  mt-2 d-block d-md-flex">
            <Col>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Teaching Style</Form.Label>
                <Form.Control
                  type="text"
                  name="TeachingStyle"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group style={theme.main} className="position-relative mt-2">
                <Form.Label>Languages</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLanguage(e.target.value)}
                  placeholder="Enter a language"
                />
                <FcPlus
                  style={{
                    ...theme.icn,
                    top: "70%",
                    transform: "translateY(-50%)",
                  }}
                  className="position-absolute"
                  onClick={handleLanguageClick}
                />
              </Form.Group>
              {languages.length > 0 && (
                <div className="mt-2">
                  <ul>
                    {languages.map((lang, index) => (
                      <li key={index}>
                        {lang}
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDeleteLanguage(index)}
                        >
                          <RxCross2 style={theme.font} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Col>
          </Row>

          <Form.Group controlId="aboutUs">
            <Form.Label>About Us</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={formData.aboutUs}
              onChange={handleChange}
              name="aboutUs"
              placeholder="Tell us about yourself..."
            />
          </Form.Group>

          <Row className="mb-3  mt-2 d-block d-md-flex">
            <Col>
              <Form.Group
                controlId="inputField"
                style={theme.main}
                className="mt-2"
              >
                <Form.Label>Enter Subject Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleSubjectChange}
                  placeholder="Subject's names"
                  name="subjectName"
                />
                <FcPlus
                  style={theme.icn}
                  className="position-absolute"
                  onClick={handleSubjectClick}
                />
              </Form.Group>
              {subjectName && (
                <div className="mt-2">
                  <ul>
                    {subjectName.map((subj, index) => (
                      <li key={index}>
                        {subj}{" "}
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            const updatedSubjectName = subjectName.filter(
                              (_, i) => i !== index
                            );
                            setSubjectName(updatedSubjectName);
                            console.log(updatedSubjectName);
                          }}
                        >
                          <RxCross2 style={theme.font} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Col>
            <Col>
              <Form.Group
                controlId="inputService"
                style={theme.main}
                className="mt-2"
              >
                <Form.Label>Enter Service Name</Form.Label>
                <Form.Control
                  type="text"
                  value={serviceName}
                  onChange={handleServiceNameChange}
                  placeholder="Service's name"
                />
                <FcPlus
                  style={theme.icn}
                  className="position-absolute"
                  onClick={handleServiceClick}
                />
              </Form.Group>
              {serviceNames.length > 0 && (
                <div className="mt-2">
                  <ul className="">
                    {serviceNames.map((name, index) => (
                      <li key={index} className="">
                        {name}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => handleDeleteService(index)}
                        >
                          <RxCross2 style={theme.font} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Col>
          </Row>
          <h4>Availability</h4>
          <Row className="mb-4  mt-2 d-block d-md-flex">
            <Col>
              <div>
                <Form className="mt-3 d-lg-flex justify-content-lg-between">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <div key={day}>
                      <Form.Check
                        type="checkbox"
                        label={day}
                        value={day}
                        checked={selectedDays.includes(day)}
                        onChange={handleCheckboxChange}
                      />

                      {selectedDays.includes(day) && (
                        <Row>
                          <Col>
                            <Form.Group
                              className="mt-2"
                              controlId={`time-${day}`}
                            >
                              <Form.Control
                                type="time"
                                value={selectedTimes[day] || "12:00"}
                                onChange={(e) =>
                                  handleTimeChange(day, e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      )}
                    </div>
                  ))}
                </Form>
                {/* <p>Selected Days: {selectedDays.join(", ")}</p> */}
                <p className="mt-3">Selected Times:</p>
                <ul>
                  {Object.entries(selectedTimes).map(([day, time]) => (
                    <li key={day}>
                      {day} : {formData[`${day.toLowerCase()}AMPM`]}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>

          <h4>Pricing</h4>
          <Row className="mb-3 mt-2 d-block d-md-flex">
            <Col md={4}>
              <Form.Group>
                <Form.Label>15 minutes</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="prices"
                    onChange={(e) => handlePriceChange(e, "15_minutes")}
                    value={prices["15_minutes"]}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>30 minutes</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control
                    type="text"
                    onChange={(e) => handlePriceChange(e, "30_minutes")}
                    value={prices["30_minutes"]}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>45 minutes</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control
                    type="text"
                    onChange={(e) => handlePriceChange(e, "45_minutes")}
                    value={prices["45_minutes"]}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="d-block d-md-flex">
            <Col md={4}>
              <Form.Group>
                <Form.Label>1 hour</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control
                    type="text"
                    onChange={(e) => handlePriceChange(e, "1_hour")}
                    value={prices["1_hour"]}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>1 hour and 30 minutes</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control
                    type="text"
                    onChange={(e) => handlePriceChange(e, "1_hour_30_minutes")}
                    value={prices["1_hour_30_minutes"]}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>2 hours</Form.Label>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <Form.Control
                    type="text"
                    onChange={(e) => handlePriceChange(e, "2_hours")}
                    value={prices["2_hours"]}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className=" mt-2 d-block d-md-flex">
            <Col>
              <Form.Group
                controlId="fileUpload"
                style={theme.main}
                className=" mt-2"
              >
                <Form.Label>Upload Photos</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  name="selectedFileNames"
                  onChange={handleFileChange}
                />
                {selectedFileNames.length > 0 && (
                  <div className="mt-2">
                    <strong>Selected Photos:</strong>
                    <ul>
                      {selectedFileNames.map((fileName, index) => (
                        <li key={index}>
                          {fileName.name}{" "}
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              const updatedFileNames = selectedFileNames.filter(
                                (_, i) => i !== index
                              );
                              setSelectedFileNames(updatedFileNames);
                            }}
                          >
                            <RxCross2 style={theme.font} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Form.Group>
            </Col>

            <Col>
              <Form.Group
                controlId="videoUpload"
                style={theme.main}
                className="mt-2"
              >
                <Form.Label>Upload Video</Form.Label>
                <Form.Control
                  type="file"
                  accept="video/*"
                  onChange={handleVideoFileChange}
                />

                {selectedVideoFile && (
                  <div className="mt-2">
                    <strong>Selected Video:</strong> {selectedVideoFile.name}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            style={theme.btn2}
            variant="primary"
            disabled={isSubmitting}
            onClick={handleProfile}
            // Disable the button while submitting
          >
            {isSubmitting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
        <hr />
        <div style={theme.card} className="py-2 px-2 col-5 d-none d-lg-flex">
          <Card.Img
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            alt="Card Image"
            style={theme.img}
          />
          <Card.Body style={theme.info}>
            <Card.Title style={theme.title}>{formData.name}</Card.Title>
            <Card.Title className="mt-1" style={theme.title}>
              {formData.title}
            </Card.Title>
            <Card.Text className="mt-2">
              {truncateText(formData.aboutUs, 22)}
            </Card.Text>
            <div className="d-flex justify-content-end">
              {formData.phoneNumber !== 0 && (
                <Button className="mt-1" style={theme.btn}>
                  Call Now
                </Button>
              )}
            </div>
          </Card.Body>
        </div>
      </div>
    </>

    // </ProtectedProfileRoute>
  );
};

export default ProfileForm;
