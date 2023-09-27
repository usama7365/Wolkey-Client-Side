import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import DataTable from "../components/dataTable";
import SideDiv from "../components/sideDiv";
import styles from '../styles/settings.module.css'

const Balance = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  const generateYearOptions = () => {
    const yearOptions = [];
    for (let year = 1900; year <= currentYear; year++) {
      yearOptions.push(year);
    }
    return yearOptions;
  };

  const handleChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const theme = {
    div: {
      border: "1px solid black",
    },
    bg: {
      backgroundColor: "grey",
    },
    right: {
      width: "100%",
    },
    parent:{
      padding:"50px 0"
    }
  };

  return (
    <div style={theme.parent}>
     <div  className="d-flex justify-content-around">
        <SideDiv/>
      
      <div  className={'  col-lg-9'}>
        <h4>Balance Expenses</h4>
        <p>Here you can view all your balances mutations</p>
        <div className="d-flex flex-column " style={theme.div}>
          <div className="d-sm-flex px-2 ">
          <div className="d-flex py-3 justify-content-around">
          <select
              className="px-4 py-1  d-flex justify-content-between"
              id="yearDropdown"
              onChange={handleChange}
              value={selectedYear}
            >
              {generateYearOptions().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          <div className="px-1">
          <select
              id="monthDropdown"
              onChange={handleMonth}
              value={selectedMonth}
              className="px-3 py-1 "
            >
              <option value="" disabled>
                Select a month
              </option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          </div>
            <label className=" d-flex  align-items-center px-2 ">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Hide scheduled bumps
            </label>
          </div>
           <DataTable/>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Balance;
