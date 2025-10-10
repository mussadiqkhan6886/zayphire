"use client";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

const AddProduct = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    gender: "",
    color: "",
    length: "",
    material: "",
    fragranceType: "",
  });

  const categories = [
    "men-fabric",
    "men-fragrance",
    "men-accessories",
    "men-tshirt",
    "women-accessories",
    "women-fragrance",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...previews]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    files.forEach((file) => formData.append("images", file));

    try {
      const res = await axios.post("/api/admin/addproduct", formData);
      if (res.status === 201) {
        toast.success("Product added successfully!");
        setData({
          name: "",
          description: "",
          price: "",
          category: "",
          brand: "",
          gender: "",
          color: "",
          length: "",
          material: "",
          fragranceType: "",
        });
        setFiles([]);
        setPreviews([]);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add product. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 flex flex-col justify-center items-center lg:px-20 md:px-17 px-5">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      <form className="grid gap-4 w-full md:w-[50%]" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Cotton Kurta"
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Write product details..."
            className="w-full border rounded-lg p-2"
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            name="price"
            value={data.price}
            onChange={handleChange}
            type="number"
            placeholder="e.g. 2500"
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-semibold mb-1">Brand</label>
          <input
            name="brand"
            value={data.brand}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Zayphire"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block font-semibold mb-1">Color</label>
          <input
            name="color"
            value={data.color}
            onChange={handleChange}
            type="text"
            placeholder="e.g. White"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="gender"
            value={data.gender}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Conditional Inputs */}
        {data.category.includes("fabric") && (
          <div>
            <label className="block font-semibold mb-1">Material</label>
            <input
              name="material"
              value={data.material}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Cotton"
              className="w-full border rounded-lg p-2"
            />
          </div>
        )}

        {data.category.includes("fragrance") && (
          <div>
            <label className="block font-semibold mb-1">Fragrance Type</label>
            <input
              name="fragranceType"
              value={data.fragranceType}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Eau de Parfum"
              className="w-full border rounded-lg p-2"
            />
          </div>
        )}

        {/* Images */}
        <div>
          <label className="block font-semibold mb-1">Product Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            required
            onChange={handleImageChange}
            className="w-full border rounded-lg p-2"
          />
          {previews.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {previews.map((url, idx) => (
                <Image
                  key={idx}
                  src={url}
                  width={80}
                  height={80}
                  alt={`Preview ${idx}`}
                  className="w-28 h-28 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 mt-4 rounded"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </main>
  );
};

export default AddProduct;
