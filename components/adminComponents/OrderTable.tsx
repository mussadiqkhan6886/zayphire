'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function OrderTable({ res }: { res: any[] }) {
  const [rows, setRows] = React.useState(res);

  const columns: GridColDef[] = [
    { field: 'orderId', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Product Name', flex: 1, minWidth: 150 },
    { field: 'status', headerName: 'Status', width: 80 },
    { field: 'price', headerName: 'Price', type: 'number', width: 80 },
    { field: 'quantity', headerName: 'Quantity', width: 80, type: 'number' },
    { field: 'totalPrice', headerName: 'Total Price', width: 80, type: 'number' },
    { field: 'fullName', headerName: 'Name', width: 110 },
    { field: 'phone', headerName: 'Phone', width: 110 },
    { field: 'email', headerName: 'Email', width: 110 },
    { field: "city", headerName: "City", width: 110},
    { field: "address", headerName: "Address", width: 110},
  ];

  const paginationModel = { page: 0, pageSize: 9 };

  return (
    <Paper sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 9]}
        disableRowSelectionOnClick
        disableColumnSelector
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
