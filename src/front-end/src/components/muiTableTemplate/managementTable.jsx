import * as React from "react";
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
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
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
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const PAGE_SIZE = 10;

function ManagementTable({ rows, columns, tableName }) {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  return (
    <div className="w-[1050px] mx-auto bg-[#F4F2EC] shadow-lg my-4 rounded h-[800px]">
      <div className="w-[1050px] h-[92px] p-[15.14px] bg-stone-200 justify-start items-center gap-[417px] inline-flex">
        <div className="w-[700px] text-center text-red-700 font-bold text-[48px]">
          {tableName}
        </div>
          <RoundedButton className="border-none bg-[#BE2623] font-bold" name="ADD"/>
      </div>
      <div style={{ height: "fit-content", width: "100%" }}>
        <StyledDataGrid
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
