'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {FaTrash, FaEdit} from "react-icons/fa";
import Link from 'next/link';
import { randomUUID } from 'crypto';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },

  { field: 'name', headerName: 'Product Name', flex: 1, minWidth: 150 },

  { field: 'brand', headerName: 'Brand', width: 130 },

  {
    field: 'price',
    headerName: 'Price ($)',
    type: 'number',
    width: 120,
  },

  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 120,
    type: 'boolean',
  },

  {
    field: 'onSale',
    headerName: 'On Sale',
    width: 120,
    type: 'boolean',
  },

  {
    field: 'category',
    headerName: 'Category',
    width: 150,
  },

  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 180,
  },

  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 120,
    renderCell: (params) => (
      <div className='flex items-center gap-5'>
        <Link href={"/admin/updateProduct/:id"}>
          <FaEdit />
        </Link>
          <FaTrash />
      </div>
    ),
  },
];


const paginationModel = { page: 0, pageSize: 9 };

export default function ProductTable({res}: {res: any}) {

  console.log(res)
  return (
    <Paper sx={{ height: "100%", width: '100%' }}>
      <DataGrid
        getRowId={randomUUID}
        rows={res}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 9]}
        disableRowSelectionOnClick
        showToolbar
        disableColumnSelector
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
