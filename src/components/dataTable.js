import React from "react";
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import paginationFactory from "react-bootstrap-table2-paginator";


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

// const columns = [
//   {
//     dataField: "id",
//   },
//   {
//     dataField: "products",
//     filter: textFilter({
//       placeholder: "", // Remove the label for this column
//     }),
//   },
//   {
//     dataField: "price",
//     text: "Price",
//     editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => {
//  // Remove the label for this column
//       return <input type="number" {...editorProps} />;
//     },
//   },
//   {
//     dataField: "date",
//     text: "Date",
//   },
// ];

const DataTable = () => {
  const paginationOptions = {
    sizePerPage: 10,
  };

  return (
<>hello</>
  );
};

export default DataTable;


{/* <div>
<BootstrapTable
  keyField="id"
  data={data}
  columns={columns}
  cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
  filter={filterFactory()}
  pagination={paginationFactory(paginationOptions)}
/>
</div> */}
