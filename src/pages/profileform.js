import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FcPlus } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { profileFormAction } from "../store/Actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";



const ProfileForm = () => {
  const response = useSelector((state) => state.userLogin.userInfo);
  console.log(response, "profilee");

  const profile = useSelector((state) => state.createProfile);
  console.log(profile, "profileState");
 
const router = useRouter()


  

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
    subjectName: [""],
    serviceNames: [""],
    selectedFileNames: [""],
    selectedVideoFile: null,
    Nationality: "",
    education: "",
    specialityDegree: "",
    Experience: "",
    TeachingStyle: "",
    languages: [""],
    day: "",
    time: "",
    cost: 0,
    availabilityDays: "",
    availabilityMins: "",
    availabilityStatus: "",
  });



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
    const fileNames = [];

    if (selectedFileNames.length + files.length <= 5) {
      for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
      }
      setSelectedFileNames((prevFileNames) => [...prevFileNames, ...fileNames]);
      setFormData((prevData) => ({
        ...prevData,
        selectedFileNames: [...prevData.selectedFileNames, ...fileNames],
      }));
    } else {
      alert("You can select a maximum of five photos.");
    }

    e.target.value = null;
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      selectedVideoFile: file.name,
    }));
  };

  const handleVideoTitleChange = (e) => {
    setVideoTitle(e.target.value);
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

  const handleProfile = async (e) => {
    e.preventDefault();

    try {
      const token = response;
      console.log(token, "tokennn");
      const config = {
        headers: {
          "x-auth-token": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      await dispatch(profileFormAction(formData, config));
      router.push("/profile")
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };
  return (
    <div className="container mt-2 py-5">
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
      value={language}
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
            <Form.Select
              onChange={handleChange}
              className="mb-2"
              name="availabilityDays"
              aria-label="Default select example"
            >
              <option>Availability Days</option>
              <option>1/Day</option>
              <option>3/Days</option>
              <option>7/Days</option>
              <option>15/Days</option>
              <option>30/Days</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              onChange={handleChange}
              className="mb-2"
              name="availabilityMins"
              aria-label="Default select example"
            >
              <option>Availability Minutes</option>
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>60 minutes</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              onChange={handleChange}
              className="mb-2"
              name="availabilityStatus"
              aria-label="Default select example"
            >
              <option>Availability Status</option>
              <option>Full time</option>
              <option>Part time</option>
              <option>Contract</option>
              <option>Busy</option>
              <option>Not Available</option>
            </Form.Select>
          </Col>
        </Row>
        <h4>Pricing</h4>
        <Row className="mb-3  mt-2 d-block d-md-flex">
          <Col>
            <Form.Select
              onChange={handleChange}
              className="mb-2"
              name="day"
              aria-label="Default select example"
            >
              <option>Days</option>
              <option>1/Day</option>
              <option>3/Days</option>
              <option>7/Days</option>
              <option>15/Days</option>
              <option>30/Days</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              onChange={handleChange}
              className="mb-2"
              name="time"
              aria-label="Default select example"
            >
              <option>Minutes</option>
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>60 minutes</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter your price"
                onChange={handleChange}
                required
                name="cost"
              />
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
              <Form.Control type="file" multiple onChange={handleFileChange} />
              {selectedFileNames.length > 0 && (
                <div className="mt-2">
                  <strong>Selected Photos:</strong>
                  <ul>
                    {selectedFileNames.map((fileName, index) => (
                      <li key={index}>
                        {fileName}{" "}
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
          onClick={handleProfile}
          type="submit"
          className="mt-3"
          variant="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProfileForm;
