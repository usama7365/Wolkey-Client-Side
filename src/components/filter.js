import React from 'react'
import { FaFilter } from "react-icons/fa";

const Filter = () => {

  const theme={
    backgroundColor:"#31A551",
    color:"white",
    borderRadius:"10px",
    border:"none"
  }
  

  return (
   
      <button style={theme}  className='w-20 px-3 py-1  d-flex justify-content-between align-items-center'>
        Filter
      <FaFilter/>
      </button>
  
  )
}

export default Filter
