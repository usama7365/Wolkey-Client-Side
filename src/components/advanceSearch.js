import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { API_URLS } from "../apiConfig";
import axios from "axios";

const AdvanceSearch = ({ onFilterChange  }) => {
  const [data, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleChange = (e, filterId) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterId]: e.target.value,
    });
  };

  
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URLS}/admin/filters`);
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getDropdownValue = (filterId) => {
    return selectedFilters[filterId] || "";
  };

  const getInputValue = (filterId) => {
    return selectedFilters[filterId] || "";
  };

  const handleGetValue = () => {
    console.log("Selected Filter Values:");
    const selectedValues = {};
    Object.keys(selectedFilters).forEach((filterId) => {
      const filter = data.find((item) => item._id === filterId);
      if (filter) {
        const filterTitle = filter.title;
        const filterValue = selectedFilters[filterId];
        console.log(`${filterTitle}: ${filterValue}`);
        selectedValues[filterId] = filterValue;
      }
      onFilterChange(selectedFilters);
    });
  };
  

  return (
    <>
    <Form className="d-flex flex-wrap justify-content-between">
      {data.map((filter) => (
        <Row className="mt-3 col-5" key={filter._id}>
          <Col className="col-12">
            {filter.inputType === "dropdown" ? (
              <Form.Group controlId={filter._id}>
                <Form.Control
                  as="select"
                  custom
                  value={getDropdownValue(filter._id)}
                  onChange={(e) => handleChange(e, filter._id)}
                >
                  <option value="">{filter.title}</option>
                  {filter.dropdownValues.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            ) : (
              <Form.Group controlId={filter._id}>
                <Form.Control
                  type="text"
                  placeholder={filter.title}
                  value={getInputValue(filter._id)}
                  onChange={(e) => handleChange(e, filter._id)}
                />
              </Form.Group>
            )}
          </Col>
        </Row>
      ))}
    
    </Form>
      <Button onClick={handleGetValue}>Get Values</Button>
      </>
  );
};

export default AdvanceSearch;
