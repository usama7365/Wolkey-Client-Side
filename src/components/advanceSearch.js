import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { API_URLS } from "../apiConfig";
import axios from "axios";

const AdvanceSearch = () => {
  const [data, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleChange = (e, filterKey) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterKey]: e.target.value,
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

  // Split the data into chunks of 2 items each
  const chunkedData = data.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <Form>
      {chunkedData.map((row, rowIndex) => (
        <Row className="mt-3" key={rowIndex}>
          {row.map((filter) => (
            <Col md={6} key={filter._id}>
              {filter.inputType === "dropdown" ? (
                <Form.Group controlId={filter.Items}>
                  <Form.Control
                    as="select"
                    custom
                    value={selectedFilters[filter.Items] || ""}
                    onChange={(e) => handleChange(e, filter.Items)}
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
                <Form.Group controlId={filter.Items}>
                  <Form.Control
                    type="text"
                    placeholder={filter.title}
                   
                    onChange={(e) => handleChange(e, filter.Items)}
                  />
                </Form.Group>
              )}
            </Col>
          ))}
        </Row>
      ))}
    </Form>
  );
};

export default AdvanceSearch;
