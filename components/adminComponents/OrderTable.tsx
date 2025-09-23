/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

export default function OrderTable({ res }: { res: any[] }) {
  const [rows, setRows] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (res?.length > 0) {
      const mappedRows = res.map((order) => ({
        _id: order._id,
        orderId: order.orderId,
        status: order.status,
        totalPrice: order.totalPrice,
        // take first item for now
        name: order.items?.[0]?.name || "N/A",
        price: order.items?.[0]?.price || 0,
        quantity: order.items?.[0]?.quantity || 0,
        images: order.items?.[0]?.images || [],
        fullName: order.userDetails?.fullName || "",
        phone: order.userDetails?.phone || "",
        email: order.userDetails?.email || "",
        city: order.shippingAddress?.city || "",
        address: order.shippingAddress?.address || "",
      }));
      setRows(mappedRows);
    }
  }, [res]);

  const columns: GridColDef[] = [
    { field: 'orderId', headerName: 'ID', width: 100 },
    {
      field: 'images',
      headerName: 'Image',
      width: 100,
      renderCell: (params) =>
        params.value?.length > 0 ? (
          <Image
          priority={true}
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
    { field: 'name', headerName: 'Product Name', flex: 1, minWidth: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'price', headerName: 'Price', type: 'number', width: 100 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 100 },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number', width: 120 },
    { field: 'fullName', headerName: 'Name', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 120 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'city', headerName: 'City', width: 120 },
    { field: 'address', headerName: 'Address', width: 180 },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 80,
      renderCell: (params) => (
        <Link href={`/admin/updateOderStatus/${params.row._id}`} className="pt-2">
          <FaEdit />
        </Link>
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
