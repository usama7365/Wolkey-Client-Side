import React , {useState} from 'react'
import { Dropdown } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const Psychology = () => {
  return (
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
              />
            </Col>
  )
}

export default Psychology
