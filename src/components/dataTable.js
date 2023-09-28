import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, product: "Product A", balance: "55$", date: "9/28/2023", isActive: true },
    { id: 2, product: "Product B", balance: "50$", date: "1/28/2023", isActive: false },
    // Add more static data here
  ]);

  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setFilterText(searchText);
    const filteredRows = data.filter((row) =>
      Object.values(row).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(searchText)
      )
    );
    setFilteredData(filteredRows);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "product", headerName: "Product", flex: 1 },
    { field: "balance", headerName: "Balance", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m={"20px"}>
      
      <TextField
        label="Filter"
        variant="outlined"
        value={filterText}
        onChange={handleFilterChange}
        fullWidth
        margin="normal"
      />
      <Box height={"70vh"} sx={{ width: "100%" }}>
        <DataGrid rows={filteredData} columns={columns} pageSize={10} />
      </Box>
    </Box>
  );
};

export default DataTable;
