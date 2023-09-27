import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator"; // Import paginationFactory

const data = [
  { products: "Product A", price: 50, date: "2023-09-20" },
  { products: "Product B", price: 75, date: "2023-09-21" },
  { products: "Product A", price: 50, date: "2023-09-20" },
  { products: "Product B", price: 75, date: "2023-09-21" },
  { products: "Product A", price: 50, date: "2023-09-20" },
  { products: "Product B", price: 75, date: "2023-09-21" },
  { products: "Product A", price: 50, date: "2023-09-20" },
  { products: "Product B", price: 75, date: "2023-09-21" },
  { products: "Product A", price: 50, date: "2023-09-20" },
  { products: "Product B", price: 75, date: "2023-09-21" },
  { products: "Product A", price: 50, date: "2023-09-20" },
  { products: "Product B", price: 75, date: "2023-09-21" },
];

const columns = [
  {
    dataField: "id",
  },
  {
    dataField: "products",
    filter: textFilter({
      placeholder: "", // Remove the label for this column
    }),
  },
  {
    dataField: "price",
    text: "Price",
    filter: textFilter({
      label: false, // Remove the label for this column
    }),
  },
  {
    dataField: "date",
    text: "Date",
    filter: textFilter({
      label: false, // Remove the label for this column
    }),
  },
];

const DataTable = () => {
  const paginationOptions = {
    sizePerPage: 10, 
    pageStartIndex: 1, 
    paginationSize: 5, 
    hideSizePerPage: true, 
  };

  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
        filter={filterFactory()}
        pagination={paginationFactory(paginationOptions)} // Enable pagination
      />
    </div>
  );
};

export default DataTable;
