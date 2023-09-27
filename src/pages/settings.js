import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SideDiv from "../components/sideDiv";
// import styles from '../styles/settings.module.css'


const Settings = () => {
  const theme = {
    right: {
      border: "1px solid silver",
      marginTop: "20px",
    },
    bg: {
      backgroundColor: "rgb(245, 93, 2)",
      border: "none",
    },

   
  };

  const [messageBoxSwitch, setMessageBoxSwitch] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNotif, setSelectedNotif] = useState("");
  const [showMessageOptions, setShowMessageOptions] = useState(false);
 

  const handleMessageBoxSwitchChange = (event) => {
    setMessageBoxSwitch(event.target.checked);
    if (!event.target.checked) {
      setSelectedOption("");
      setShowMessageOptions(false);
    }
  };

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const handleNotifications = (event) => {
    setSelectedNotif(event.target.id);
  };
  const handleToggleMessageOptions = () => {
    setShowMessageOptions(!showMessageOptions);
  };


  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <>
   
  <div className=" py-5 px-2 px-sm-4 ">
    <div className="d-flex justify-content-around" >
    <SideDiv/>
      
      <div  className={' d-flex flex-column col-lg-9  ' }>
        <h4>Settings</h4>
        <div className="px-3 py-3" style={theme.right}>
          <h5>Preferred language</h5>
          <p>Please select your preferred language </p>
          <Form.Select>
            <option>NL</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="px-3 py-3" style={theme.right}>
          <h5>Message Box</h5>
          <p>
            Customers can contact you via the message box. Here the Message box
            can be switched on or off.
          </p>
          <Form.Check
            type="switch"
            id="messageBoxSwitch"
            label="The message box is on"
            checked={messageBoxSwitch}
            onChange={handleMessageBoxSwitchChange}
          />
          {showMessageOptions ||
            (messageBoxSwitch && (
              <>
                <hr />
                <p>Send me an email when I have new messages</p>
                <Form.Check
                  type="checkbox"
                  id="everyNewMessage"
                  label="With every new message"
                  checked={selectedOption === "everyNewMessage"}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  id="oncePerDay"
                  label="Maximum 1 time per day"
                  checked={selectedOption === "oncePerDay"}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  id="oncePerWeek"
                  label="Maximum once a week"
                  checked={selectedOption === "oncePerWeek"}
                  onChange={handleCheckboxChange}
                />
                <Form.Check
                  type="checkbox"
                  id="noEmail"
                  label="Don't send me an email"
                  checked={selectedOption === "noEmail"}
                  onChange={handleCheckboxChange}
                />
                <Button
                  style={theme.bg}
                  onClick={handleToggleMessageOptions}
                  className="mt-3"
                >
                  {showMessageOptions ? null : "Save Changes"}
                </Button>
              </>
            ))}
        </div>

        <div className="px-3 py-3" style={theme.right}>
          <h5>Notifications</h5>
          <p>
            You will receive notifications about your advertisement or site
            maintenance notifications from us
          </p>
          <hr />
          <p>Send an email when there are new notifications</p>
          <Form.Check
            type="checkbox"
            id="everyReport"
            label="With every report"
            checked={selectedNotif === "everyReport"}
            onChange={handleNotifications}
          />
          <Form.Check
            type="checkbox"
            id="once-Per-Day"
            label="Maximum 1 time per day"
            checked={selectedNotif === "once-Per-Day"}
            onChange={handleNotifications}
          />
          <Form.Check
            type="checkbox"
            id="once-Per-Week"
            label="Maximum once a week"
            checked={selectedNotif === "once-Per-Week"}
            onChange={handleNotifications}
          />
          <Form.Check
            type="checkbox"
            id="no-Email"
            label="Don't send me an email"
            checked={selectedNotif === "no-Email"}
            onChange={handleNotifications}
          />
          <Button className="mt-3" style={theme.bg}>
            Save Changes
          </Button>
        </div>
        <div className="px-3 py-3" style={theme.right}>
          <h4>Change password</h4>
          <Form.Group className="mb-3">
            <Form.Label>Old password</Form.Label>
            <Form.Control required />
            <Form.Label>New password</Form.Label>
            <Form.Control required />
            <Form.Label>Repeat password</Form.Label>
            <Form.Control required />
          </Form.Group>
          <Button className="mt-3" style={theme.bg}>
            Modify
          </Button>
        </div>
        <div className="px-3 py-3" style={theme.right}>
          <h4>Change e-mail address</h4>
          <p>
            Enter your email address and click on 'Modify'. At your new address
            you will receive an email with a link and code to make your final
            change{" "}
          </p>
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Button className="mt-3" style={theme.bg}>
            Modify
          </Button>
        </div>
        <div className="px-3 py-3" style={theme.right}>
          <h4>Invoice Details</h4>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="kvkNumber">
                  <Form.Label className="h6">KVK-number</Form.Label>
                  <Form.Control type="text" name="kvkNumber" required />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="companyName">
                  <Form.Label className="h6">Company name</Form.Label>
                  <Form.Control type="text" name="companyName" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="contact">
                  <Form.Label className="h6">Contact</Form.Label>
                  <Form.Control type="text" name="contact" required />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="PhoneNumber">
                  <Form.Label className="h6">Phone Number</Form.Label>
                  <Form.Control type="text" name="PhoneNumber" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="btwNumber">
                  <Form.Label className="h6">BTW-number</Form.Label>
                  <Form.Control type="text" name="btwNumber" required />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="zipCode">
                  <Form.Label className="h6">Zip-code</Form.Label>
                  <Form.Control type="text" name="zipCode" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label className="h6">City</Form.Label>
                  <Form.Control type="text" name="city" required />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="streetName">
                  <Form.Label className="h6">Street name</Form.Label>
                  <Form.Control type="text" name="streetName" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="houseNumber">
                  <Form.Label className="h6">House no</Form.Label>
                  <Form.Control type="text" name="houseNumber" required />
                </Form.Group>
              </Col>
            </Row>
            <Button className="mt-3" style={theme.bg}>
              Save Changes
            </Button>
          </Form>
        </div>
        <div className="px-3 py-3" style={theme.right}>
          <h4>Remove Account</h4>
          <p>
            By deleting your account, your data will be deleted according to the
            Privacy Policy
          </p>
          <p>Click here to delete your account</p>
        </div>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default Settings;
