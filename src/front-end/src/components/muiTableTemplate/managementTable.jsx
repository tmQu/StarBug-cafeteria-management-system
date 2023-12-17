import * as React from "react";
import { Link, useLocation } from 'react-router-dom';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { RoundedButton } from "../buttons/button";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  overflowX: 'auto',
  color: theme.palette.mode === "light" ? "#0E3746" : "rgba(255,255,255,0.85)",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
    color:
      theme.palette.mode === "light" ? "#0E3746" : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 0,
    "&.Mui-selected": {
      pointerEvents: "none",
      backgroundColor: "transparent",
      color: "inherit",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  // row interleaved background
  "& .MuiDataGrid-row:nth-of-type(odd)": {
    backgroundColor: theme.palette.mode === "light" ? "#EAE8DC" : "#1d1d1d",
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: theme.palette.mode === "light" ? "#F4F2EC" : "#1d1d1d",
  },
  // header column background
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: theme.palette.mode === "light" ? "#F4F2EC" : "#1d1d1d",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
  },
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const StyledPagination = (
    <Pagination
      count={pageCount}
      renderItem={(item) => (
        <PaginationItem
          {...item}
        />
      )}
      sx={{
        color: "#BE2623",
        mx: "auto",
        my: "auto",
        width: "fit-content"
      }}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );

  return StyledPagination;
}



const PAGE_SIZE = 10;

function ManagementTable({ rows, columns, tableName }) {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  return (
    <div className=" w-fit lg:w-full h-full mx-auto bg-[#EAE8DC] shadow-lg my-4 rounded">
      <div className="w-full p-[15.14px] bg-stone-200 flex flex-row justify-between items-center">
        <div className="text-[48px] lg:text-[32px] font-bold text-[#BE2623] mb-2 lg:mb-0">
          {tableName}
        </div>
        <RoundedButton
          className="border-none !bg-[#BE2623] !font-bold !text-[20px] !text-[#F3F2ED] lg:mr-2"
          name="ADD"
        />
      </div>
      <div style={{ height: "fit-content", width: "100%" }}>
        <StyledDataGrid
          disableRowSelectionOnClick
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[PAGE_SIZE]}
          slots={{
            pagination: CustomPagination,
          }}
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default ManagementTable;
