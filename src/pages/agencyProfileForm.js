import React ,  { useState , useEffect } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { agencyProfileAction } from '../store/Actions/profileAction';
import { useDispatch } from 'react-redux';

const AgencyProfileForm = () => {

    const [agencyData, setAgencyData] = useState({
        kvkNumber: '',
        companyName: '',
        contact: '',
        PhoneNumber: '',
        btwNumber: '',
        zipCode: '',
        city: '',
        streetName: '',
        houseNumber: '',
      });

      const [response, setResponse] = useState(null);
      const dispatch = useDispatch()
     
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
     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAgencyData({
          ...agencyData,
          [name]: value,
        });
      };

      const handleAgencySubmit=async(e)=>{
        e.preventDefault();
      
        // Set form submission status to true
        try {
          const token = response ? response.token : null;
          if (!token) {
            console.error("Token is missing.");
            return;
          }
          console.log(token, "tokennn");
    
          await dispatch(agencyProfileAction(agencyData, token));
          
        } catch (error) {
          console.error("Error submitting form:", error);
        } finally {
         
        }
      }



  return (
    <Container className='mt-2 py-5'>
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="kvkNumber">
            <Form.Label className="h6">KVK-number</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="kvkNumber" required />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="companyName">
            <Form.Label className="h6">Company name</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="companyName" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="contact">
            <Form.Label className="h6">Contact</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="contact" required />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="PhoneNumber">
            <Form.Label className="h6">Phone Number</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="PhoneNumber" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="btwNumber">
            <Form.Label className="h6">BTW-number</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="btwNumber" required />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="zipCode">
            <Form.Label className="h6">Zip-code</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="zipCode" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="city">
            <Form.Label className="h6">City</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="city" required />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="streetName">
            <Form.Label className="h6">Street name</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="streetName" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Form.Group className='mb-3' controlId="houseNumber">
            <Form.Label className="h6">House no</Form.Label>
            <Form.Control  onChange={handleChange} type="text" name="houseNumber" required />
          </Form.Group>
        </Col>
      
      </Row>
    </Form>
    <Button onClick={handleAgencySubmit}>
      Submit
    </Button>
    </Container>
  );
};

export default AgencyProfileForm;
