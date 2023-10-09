// BasicTabs.js
import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Profile from "../components/profile"
import Profile2 from "../components/profile2"
import CustomTabPanel from "../components/CustomTabPanel"; // Import the CustomTabPanel component

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      {isAuthenticated ? (
          <>
            {windowWidth < 650 ? <Profile2 /> : <Profile />}
          </>
        ) : null}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Your content for tab 2 */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Your content for tab 3 */}
      </CustomTabPanel>
    </Box>
  );
}
