import React, { useState } from 'react';
import { Button, Container, Dropdown, FormControl, InputGroup, Navbar, Nav } from 'react-bootstrap';
import { BsArrowDown, BsSearch } from 'react-icons/bs';

import 'bootstrap/dist/css/bootstrap.min.css';

const SearchNav = () => {

const theme={
  success:{
    backgroundColor:"#31A551",
    border:"none"
  
  } , 
  row:{
    width:"30%"
  },
}

  const [selectedCategory, setSelectedCategory] = useState('All categories');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='col-10 px-2 d-none d-lg-flex justify-content-end'>
  
   <Navbar className='col-8  d-flex '  expand="lg">
      <Container className='w-100 d-flex'>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <div style={theme.row}>
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="light">
                {selectedCategory} <BsArrowDown />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleCategorySelect('All categories')}>
                  All categories
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Mockups')}>
                  Mockups
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Templates')}>
                  Templates
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Design')}>
                  Design
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Logos')}>
                  Logos
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          </div>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search Mockups, Logos, Design Templates..."
              aria-label="Search"
            />
            <Button className='d-flex align-items-center' style={theme.success}>
              <BsSearch />
            </Button>
          </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </div>
   
  );
};

export default SearchNav;
