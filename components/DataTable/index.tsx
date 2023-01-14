import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

const columns: GridColDef[] = [
  { field: "logId", headerName: "Log ID", width: 200 },
  { field: "applicationType", headerName: "Application Type", width: 200 },
  { field: "applicationId", headerName: "Application ID", width: 200 },
  { field: "actionType", headerName: "Action", width: 200 },
  {
    field: "actionDetails",
    headerName: "Action Details",
    width: 200,
  },
  { field: "creationTimestamp", headerName: "Date: Time", width: 200 },
];

export default function DataTable({ rows }: { rows?: Array<object> }) {
  return (
    <Paper style={{ height: 631, width: "100%" }}>
      <DataGrid
        rows={rows || []}
        columns={columns}
        pageSize={10}
        disableColumnMenu={true}
        getRowId={(item) => item.logId}
      />
    </Paper>
  );
}
