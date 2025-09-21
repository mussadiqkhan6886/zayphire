'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

export default function OrderTable({ res }: { res: any[] }) {
  const [rows, setRows] = React.useState(res);

  const columns: GridColDef[] = [
    { field: 'orderId', headerName: 'ID', width: 100 },
    {
      field: 'images',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
        <Image
          width={50}
          height={50}
          src={params.value?.[0]}
          alt={params.row.name}
          className="w-12 h-12 object-cover rounded"
        />
      ),
    },
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
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 80,
      renderCell: (params) => (
        <div className="flex items-center gap-5 pt-3">
          <Link href={`/admin/updateOrderStatus/${params.row._id}`}>
            <FaEdit />
          </Link>
        </div>
      ),
    },
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
