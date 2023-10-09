import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from '../../components/profile';
import Profile2 from '../../components/profile2';
import Photos from '../../components/photos/[userId]';
import Videos from '../../components/videos/[userId]' 
import City from '../../components/city'

function ViewProfile(props) {
  const { children, value, index, ...other } = props;
  const [windowWidth, setWindowWidth] = useState(0);



  useEffect(() => { 
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
          <div>
            {value === 0 && windowWidth < 650 ? <Profile2 /> : null}
            {value === 0 && windowWidth >= 650 ? <Profile /> : null}
            {value === 1 ? <Photos/> : null}
            {value === 2 ? <Videos/> : null}
          </div>
        </Box>
      )}
    </div>
  );
}

ViewProfile.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,

};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' , justifyContent:"space-around"    }}>
    
      <City /> 
    
      <div className='col-12  col-lg-9'>
        <Box sx={{ display:"flex", justifyContent:"center" ,  borderColor: '#F55D02' , backgroundColor:"#EEF4FA" , borderRadius:"5px" , marginTop:"10px"  }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Photos" {...a11yProps(1)} />
            <Tab label="Videos" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <ViewProfile value={value} index={0} >
          {/* Content is determined by windowWidth */}
        </ViewProfile>
        <ViewProfile value={value} index={1} >
          {/* Header component */}
        </ViewProfile>
        <ViewProfile value={value} index={2}>
          {/* SearchNav component */}
        </ViewProfile>
      </div>
    </Box>
  );
}