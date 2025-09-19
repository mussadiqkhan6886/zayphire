'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {FaTrash, FaEdit} from "react-icons/fa";
import Link from 'next/link';

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

const rows = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 1199,
    inStock: true,
    onSale: false,
    category: 'Smartphones',
    createdAt: '2025-09-15',
  },
  {
    id: 2,
    name: 'Galaxy S24',
    brand: 'Samsung',
    price: 999,
    inStock: true,
    onSale: true,
    category: 'Smartphones',
    createdAt: '2025-09-12',
  },
  {
    id: 3,
    name: 'Air Jordan 1',
    brand: 'Nike',
    price: 199,
    inStock: false,
    onSale: false,
    category: 'Shoes',
    createdAt: '2025-09-10',
  },
  {
    id: 4,
    name: 'Levi’s Jeans',
    brand: 'Levi’s',
    price: 89,
    inStock: true,
    onSale: true,
    category: 'Clothing',
    createdAt: '2025-09-08',
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function ProductTable() {
  return (
    <Paper sx={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        showToolbar
        disableColumnSelector
        
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
