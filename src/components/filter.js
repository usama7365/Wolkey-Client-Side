import React from 'react'
import { FaFilter } from "react-icons/fa";

const Filter = () => {

  

  return (
    <div className='w-100 d-flex justify-content-end px-5 '>
      <div className='w-20 px-4 d-flex justify-content-between align-items-center' style={{backgroundColor:"#F55D02", color:"#FFFFFF"}} >
        Filter
      <FaFilter/>
      </div>
    </div>
  )
}

export default Filter
