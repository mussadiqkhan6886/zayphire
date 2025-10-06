/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { FaTrash, FaEdit } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

export default function ProductTable({ res }: { res: any[] }) {
  const [rows, setRows] = React.useState<any[]>([]);

  // Map incoming data to table rows
  React.useEffect(() => {
    if (res?.length > 0) {
      const mappedRows = res.map((product) => ({
        _id: product._id,
        productId: product.productId,
        name: product.name,
        brand: product.brand,
        price: product.price,
        discountPrice: product.discountPrice || "—",
        inStock: product.inStock,
        isSale: product.isSale,
        category: product.category,
        color: product.color,
        gender: product.gender,
        length: product.length,
        material: product.material,
        type: product.type,
        images: product.images || [],
      }));
      setRows(mappedRows);
    }
  }, [res]);

  // Delete product
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`);
      setRows((prev) => prev.filter((row) => row._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const columns: GridColDef[] = [
    { field: 'productId', headerName: 'ID', width: 80 },
    {
      field: 'images',
      headerName: 'Image',
      width: 100,
      renderCell: (params) =>
        params.value?.length > 0 ? (
          <Image
            priority
            width={50}
            height={50}
            src={params.value[0]}
            alt={params.row.name}
            className="w-12 h-12 object-cover rounded"
          />
        ) : (
          <span>No Image</span>
        ),
    },
    { field: 'name', headerName: 'Product Name', flex: 1, minWidth: 140 },
    { field: 'price', headerName: 'Price', type: 'number', width: 70 },
    { field: 'discountPrice', headerName: 'Discount', width: 80 },
    { field: 'inStock', headerName: 'In Stock', type: 'boolean', width: 90 },
    { field: 'isSale', headerName: 'On Sale', type: 'boolean', width: 90 },
    { field: 'isNewArrival', headerName: 'New Arrival', type: 'boolean', width: 90 },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'color', headerName: 'Color', width: 90 },
    { field: 'material', headerName: 'Material', width: 100 },
    { field: 'length', headerName: 'Length', width: 90 },
    { field: 'gender', headerName: 'Gender', width: 80 },
    { field: 'type', headerName: 'Type', width: 90 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <div className="flex items-center gap-5 pt-2">
          <Link href={`/admin/updateProduct/${params.row._id}`}>
            <FaEdit />
          </Link>
          <FaTrash
            className="cursor-pointer"
            onClick={() => handleDelete(params.row._id)}
          />
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
