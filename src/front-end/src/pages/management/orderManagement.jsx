import * as React from "react";
import { Button } from "@mui/material";
import ManagementTable from "../../components/muiTableTemplate/managementTable";
import orders from "../../api/order";

// Define columns for the table
const columns = [
  { field: "id", headerName: "Tracking ID", width: 170 },
  { field: "branch", headerName: "Branch", width: 170 },
  { field: "customer", headerName: "Customer", width: 170 },
  { field: "date", headerName: "Date", width: 170 },
  { field: "amount", headerName: "Amount", width: 170 },
  { field: "payment", headerName: "Payment Mode", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => (
      <div
        className={`px-2 py-1 rounded-[20px] text-sm font-semibold ${
          params.row.status === "Delivered"
            ? "bg-[#EBF9F1] text-[#1F9254]"
            : params.row.status === "Canceled"
            ? "bg-[#FBE7E8] text-[#A30D11]"
            : params.row.status === "Process"
            ? "bg-[#FEF2E5] text-[#CD6200]"
            : ""
        }`}
      >
        {params.value}
      </div>
    ),
  },
  {
    field: "add",
    headerName: "Action",
    width: 114,
    renderCell: (params) => (
      <div className="gap-[7px] flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <path
            d="M3.14844 5.35669H4.8151H18.1484"
            stroke="#A30D11"
            strokeWidth="1.89189"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.31519 5.35677V3.6901C7.31519 3.24808 7.49078 2.82415 7.80334 2.51159C8.1159 2.19903 8.53982 2.02344 8.98185 2.02344H12.3152C12.7572 2.02344 13.1811 2.19903 13.4937 2.51159C13.8063 2.82415 13.9819 3.24808 13.9819 3.6901V5.35677M16.4819 5.35677V17.0234C16.4819 17.4655 16.3063 17.8894 15.9937 18.2019C15.6811 18.5145 15.2572 18.6901 14.8152 18.6901H6.48185C6.03982 18.6901 5.6159 18.5145 5.30334 18.2019C4.99078 17.8894 4.81519 17.4655 4.81519 17.0234V5.35677H16.4819Z"
            stroke="#A30D11"
            strokeWidth="1.89189"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.98193 9.52319V14.5232"
            stroke="#A30D11"
            strokeWidth="1.89189"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3149 9.52319V14.5232"
            stroke="#A30D11"
            strokeWidth="1.89189"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
      </div>
    ),
  },
];

// Define the rows for the table
const rows =
  orders && Array.isArray(orders)
    ? orders.map((item) => ({
        id: `#${item.id}`, // Thêm dấu # vào trước id
        branch: item.branch,
        customer: item.customer,
        date: item.date,
        amount: item.amount,
        payment: item.payment,
        status: item.status,
      }))
    : [];

const OrderManagement = () => {
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen h-screen mx-auto flex flex-col gap-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div>
          <ManagementTable
            columns={columns}
            rows={rows}
            tableName="ORDER MANAGEMENT"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
