'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { FaTrash, FaEdit } from "react-icons/fa";
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';


const handleDelete = async (id: string) => {
  const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`)
  console.log(res)
}

const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 200 },
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
    )
  },
  { field: 'name', headerName: 'Product Name', flex: 1, minWidth: 150 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  { field: 'price', headerName: 'Price ($)', type: 'number', width: 120 },
  { field: 'inStock', headerName: 'In Stock', width: 120, type: 'boolean' },
  { field: 'isSale', headerName: 'On Sale', width: 120, type: 'boolean' },
  { field: 'category', headerName: 'Category', width: 150 },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 120,
    renderCell: (params) => (
      <div className='flex items-center gap-5 pt-3'>
        <Link href={`/admin/updateProduct/${params.row._id}`}>
          <FaEdit />
        </Link>
        <FaTrash className="cursor-pointer" onClick={ () => handleDelete(params.row._id)} />
      </div>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 9 };

export default function ProductTable({ res }: { res: any }) {
  return (
    <Paper sx={{ height: "100%", width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={res}
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
