import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FcPlus } from "react-icons/fc";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { profileFormAction } from "../store/Actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Card, InputGroup } from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import "react-time-picker/dist/TimePicker.css";
import SideDiv from "../components/sideDiv";
import { useAuthentication } from "../components/ProtectedRoute";

const ProfileForm = () => {
  const profile = useSelector((state) => state.createProfile);
  const isAuthenticated = useAuthentication();
  console.log(isAuthenticated , "issss")
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated === null) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  const [response, setResponse] = useState(null);
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
    selectedImageFiles: [],
    selectedVideoFile: [],
    Nationality: "",
    education: "",
    specialityDegree: "",
    Experience: "",
    TeachingStyle: "",
    languages: [],
  });
  const [subjectName, setSubjectName] = useState([]);
  const [selectedImageFiles, setSelectedImageFiles] = useState([]);
  const [subject, setSubject] = useState("");
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [serviceNames, setServiceNames] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const [prices, setPrices] = useState({
    "15 minutes": null,
    "30 minutes": null,
    "45 minutes": null,
    "1 hour": null,
    "1 hour_30_minutes": null,
    "2 hours": null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedResponse = localStorage.getItem("auth-user");
      if (storedResponse) {
        const parsedResponse = JSON.parse(storedResponse);
        setResponse(parsedResponse);
      }
    }
  }, []);
  console.log(response, "tokk");

  useEffect(() => {
    const storedProfileData = JSON.parse(localStorage.getItem("profile"));
    console.log(storedProfileData, "data");

    if (storedProfileData) {
      const parsedSubjectName = JSON.parse(
        storedProfileData.subjectName || "[]"
      );
      const parsedserviceNames = JSON.parse(
        storedProfileData.serviceNames || "[]"
      );
      const parsedselectedTimes = JSON.parse(
        storedProfileData.selectedTimes || "[]"
      );
      const parsedprices = JSON.parse(storedProfileData.prices || "{}");
      console.log(parsedselectedTimes, "time");

      let parsedImageFileNames = [];
      if (Array.isArray(storedProfileData.selectedImageFiles)) {
        parsedImageFileNames = storedProfileData.selectedImageFiles.map(
          (imageUrl) => {
            const segments = imageUrl.split("/");
            const fileNameWithExtension = segments[segments.length - 1];
            const fileName = fileNameWithExtension.split(".")[0];
            return fileName;
          }
        );
      }

      if (Array.isArray(storedProfileData.selectedVideoFile)) {
        const videoUrl = storedProfileData.selectedVideoFile[0] || null;
        if (typeof videoUrl === "string") {
          const segments = videoUrl.split("/");
          const fileNameWithExtension = segments[segments.length - 1];
          const fileName = fileNameWithExtension.split(".")[0];
          setSelectedVideoFile(fileName);
        } else {
          console.error("videoUrl is not a string:", videoUrl);
        }
      }

      console.log(parsedImageFileNames, "file");

      setFormData((prevData) => ({
        ...prevData,
        ...storedProfileData,
        subjectName: parsedSubjectName,
      }));
      setSubjectName(parsedSubjectName);
      setServiceNames(parsedserviceNames);
      setSelectedTimes(parsedselectedTimes);
      setPrices(parsedprices);
      setSelectedImageFiles(parsedImageFileNames);
      console.log("Selected Image Files:", selectedImageFiles);
    }
  }, []);
 
  // const { profileId } = router.query;

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
    bar: {
      backgroundColor: "#EEF4FA",
      fontSize: "14px",
      cursor: "pointer",
      position: "fixed",
      top: "0",
      left: "0",
      bottom: "0",
      width: "18%",
      borderRadius: "5px",
      border: "none",
    },
    parent: {
      width: "80%",
    },
    container: {
      width: "80%",
    },
  };

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubjectClick = () => {
    if (subject.trim() !== "") {
      setSubject("");
      setSubjectName([...subjectName, subject]);
      setFormData((prevData) => ({
        ...prevData,
        subjectName: [...prevData.subjectName, subject],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(e.target.files);
    const fileNames = [];

    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i]);
    }

    console.log(fileNames, "filenamesss");

    setFormData((prevData) => ({
      ...prevData,
      selectedImageFiles: [...prevData.selectedImageFiles, ...fileNames],
    }));

    setSelectedImageFiles((prevFileNames) => [...prevFileNames, ...fileNames]);
    if (fileNames.length > 0) {
      setPreviewImage(URL.createObjectURL(fileNames[0]));
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
      setSelectedDays(selectedDays.filter((d) => d !== day));
      const updatedTimes = { ...selectedTimes };
      delete updatedTimes[day];
      setSelectedTimes(updatedTimes);

      setFormData((prevData) => ({
        ...prevData,
        availabilityDays: selectedDays.filter((d) => d !== day).join(", "), // Join selected days as a comma-separated string
      }));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleTimeChange = (day, time) => {
    const timeParts = time.split(":");
    const hour = parseInt(timeParts[0], 10);
    const minute = timeParts[1];
    const ampm = hour >= 12 ? "PM" : "AM";
    const ampmHour = hour > 12 ? hour - 12 : hour;

    setSelectedTimes({ ...selectedTimes, [day]: time });

    setFormData((prevData) => ({
      ...prevData,
      [day.toLowerCase()]: time,
      [`${day.toLowerCase()}AMPM`]: `${ampmHour}:${minute} ${ampm}`,
      selectedTimes: selectedTimes,
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

  const handleLanguagesChange = (languages) => {
    setLanguages(languages);
    setFormData((prevData) => ({
      ...prevData,
      languages: languages,
    }));
  };

  const handleProfile = async (e) => {
    e.preventDefault();
    if (!formData) {
      alert("okk");
    }
    setIsSubmitting(true);
    try {
      const token = response ? response.token : null;
      if (!token) {
        console.error("Token is missing.");
        return;
      }
      console.log(token, "tokennn");

      await dispatch(profileFormAction(formData, token));
      localStorage.setItem("Profile", JSON.stringify(formData));
      router.push("/ViewProfile/");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      
        <ToastContainer />
        {isAuthenticated ? (
        <div className="py-5">
          <div className="d-flex justify-content-around px-5">
            <SideDiv />

            <div style={theme.parent}>
              <h2 className="mb-3">Personal Information Form</h2>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3 mt-2 d-block d-md-flex">
                  <Col>
                    <Form.Group controlId="firstName">
                      <Form.Label className="h6">Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="phoneNumber">
                      <Form.Label className="text-nowrap h6">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="age">
                      <Form.Label className="h6">Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3  mt-2 d-block d-md-flex">
                  <Col>
                    <Form.Group controlId="dateOfBirth">
                      <Form.Label className="h6">Date of Birth</Form.Label>
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
                      <Form.Label className="h6">Nationality</Form.Label>
                      <Form.Control
                        name="Nationality"
                        onChange={handleChange}
                        value={formData.Nationality}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="country">
                      <Form.Label className="h6">City</Form.Label>
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
                      <Form.Label className="h6">Education</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleChange}
                        name="education"
                        value={formData.education}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="h6">Degree</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleChange}
                        name="specialityDegree"
                        value={formData.specialityDegree}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="h6">Experience</Form.Label>
                      <Form.Control
                        type="text"
                        name="Experience"
                        onChange={handleChange}
                        value={formData.Experience}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3  mt-2 d-block d-md-flex">
                  <Col>
                    <Form.Group>
                      <Form.Label className="h6">Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={formData.title}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="h6">Teaching Style</Form.Label>
                      <Form.Control
                        type="text"
                        name="TeachingStyle"
                        onChange={handleChange}
                        value={formData.TeachingStyle}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label className="h6">Languages</Form.Label>
                    <DropdownMultiselect
                      options={[
                        "English",
                        "German",
                        "Spanish",
                        "French",
                        "Chinese",
                        "Russian",
                        "Japanese",
                        "Arabic",
                        "Dutch",
                        "Italian",
                      ]}
                      name="languages"
                      selected={languages}
                      handleOnChange={handleLanguagesChange}
                    />
                  </Col>
                </Row>

                <Form.Group controlId="aboutUs">
                  <Form.Label className="h6">About Us</Form.Label>
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
                      <Form.Label className="h6">Enter Subject Name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleSubjectChange}
                        placeholder="Subject's names"
                        name="subjectName"
                        value={subject}
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
                      <Form.Label className="h6">Enter Service Name</Form.Label>
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
                      <ul className=" d-flex flex-column">
                        {Object.entries(selectedTimes).map(([day, time]) => (
                          <li className="d-flex" key={day}>
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
                      <Form.Label className="h6">15 minutes</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>€</InputGroup.Text>
                        <Form.Control
                          type="number"
                          name="prices"
                          onChange={(e) => handlePriceChange(e, "15_minutes")}
                          value={prices["15_minutes"]}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="h6">30 minutes</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>€</InputGroup.Text>
                        <Form.Control
                          type="number"
                          onChange={(e) => handlePriceChange(e, "30_minutes")}
                          value={prices["30_minutes"]}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="h6">45 minutes</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>€</InputGroup.Text>
                        <Form.Control
                          type="number"
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
                      <Form.Label className="h6">1 hour</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>€</InputGroup.Text>
                        <Form.Control
                          type="number"
                          onChange={(e) => handlePriceChange(e, "1_hour")}
                          value={prices["1_hour"]}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="h6">
                        1 hour and 30 minutes
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text>€</InputGroup.Text>
                        <Form.Control
                          type="number"
                          onChange={(e) =>
                            handlePriceChange(e, "1_hour_30_minutes")
                          }
                          value={prices["1_hour_30_minutes"]}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="h6">2 hours</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>€</InputGroup.Text>
                        <Form.Control
                          type="number"
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
                      <Form.Label className="h6">Upload Photos</Form.Label>
                      <Form.Control
                        type="file"
                        multiple
                        name="selectedImageFiles"
                        onChange={handleFileChange}
                      />
                      {selectedImageFiles.length > 0 && (
                        <div className="mt-2">
                          <strong>Selected Photos:</strong>
                          <ul>
                            {selectedImageFiles.map((fileName, index) => (
                              <li key={index}>
                                {fileName.name}{" "}
                                {/* Use .name to display the file name */}
                                <span
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    const updatedFileNames =
                                      selectedImageFiles.filter(
                                        (_, i) => i !== index
                                      );
                                    setSelectedImageFiles(updatedFileNames);
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
                      <Form.Label className="h6">Upload Video</Form.Label>
                      <Form.Control
                        type="file"
                        accept="video/*"
                        onChange={handleVideoFileChange}
                      />

                      {selectedVideoFile && (
                        <div className="mt-2">
                          <strong>Selected Video:</strong>{" "}
                          {selectedVideoFile.name}
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
              <div
                style={theme.card}
                className="py-2 px-2 col-5 d-none d-lg-flex"
              >
                {previewImage && (
                  <Card.Img
                    src={previewImage}
                    alt="Card Image"
                    style={theme.img}
                  />
                )}
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
          </div>
        </div>
     ) : null}
    </>
   
  );
};

export default ProfileForm;
