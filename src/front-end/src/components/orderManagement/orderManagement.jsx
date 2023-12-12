import * as React from "react";
import { Button } from "@mui/material";
import ManagementTable from "../muiTableTemplate/managementTable";

// define columns for the table
const columns = [
  { field: "id", headerName: "Staff ID", width: 150 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "dob", headerName: "Date of birth", width: 200 },
  { field: "branch", headerName: "Branch", width: 150 },
  {
    field: "add",
    headerName: "Add",
    width: 100,
    renderCell: (params) => (
      <Button variant="contained" color="primary">
        Add
      </Button>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => (
      <Button variant="outlined" color="secondary">
        Action
      </Button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 100,
    renderCell: (params) => (
      <Button variant="text" color="error">
        Delete
      </Button>
    ),
  },
];

// Define the rows for the table
const rows = [
  {
    id: "#29432",
    name: "Matt Dickerson",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#232",
    name: "Matt 2323",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#666",
    name: "23 Dickerson",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#12",
    name: "Matt 124",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#124",
    name: "24 Dickerson",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#125",
    name: "Matt 57",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#1162",
    name: "574 Dickerson",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#547",
    name: "Matt 574",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#43646",
    name: "Matt 574",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  {
    id: "#332",
    name: "Matt 574",
    email: "email@email.com",
    dob: "12/05/2022",
    branch: "Branch1",
  },
  // Add more rows as needed
];

const orderManagement = () => {
  return (
    <div>
      <ManagementTable columns={columns} rows={rows} tableName="Order Management"/>
    </div>
  );
};

export default orderManagement;
