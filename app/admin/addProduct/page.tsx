"use client";
import React, { ChangeEvent, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";

const AddProduct = () => {
  const [files, setFiles] = useState<File[]>([]);       // store real files
  const [previews, setPreviews] = useState<string[]>([]); // store preview URLs
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    gender: "",
    color: "",
  });

  const categories = ["men-fabric", "men-fragrance", "men-accessories", "men-tshirt"];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);

    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("color", data.color);
    formData.append("gender", data.gender);

    files.forEach((file) => {
      formData.append("images", file); // ✅ send real files
    });

    try {
      const res = await axios.post("/api/admin/addproduct", formData);
      if (res.status === 201) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "",
          brand: "",
          gender: "",
          color: "",
        });
        setFiles([]);
        setPreviews([]);
      }
      console.log(res)
    } catch (err: any) {
      console.log(err.message);
    } finally{
      setLoading(false)
    }
  };

  return (
    <main className="p-6 flex flex-col justify-center items-center lg:px-20 md:px-17 px-5">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaPlusCircle /> Add New Product
      </h1>

      <form className="grid gap-4 w-full md:w-[50%]" onSubmit={handleSubmit}>
        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            type="text"
            placeholder="e.g. iPhone 15 Pro"
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
          <label className="block font-semibold mb-1">Price </label>
          <input
            name="price"
            value={data.price}
            onChange={handleChange}
            type="number"
            placeholder="e.g. 999"
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
            placeholder="e.g. Apple"
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Color</label>
          <input
            name="color"
            value={data.color}
            onChange={handleChange}
            type="text"
            placeholder="e.g. black"
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Gender</label>
          <input
            name="gender"
            value={data.gender}
            onChange={handleChange}
            type="text"
            placeholder="e.g. women men"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select name="category" value={data.category} onChange={handleChange} className="w-full border rounded-lg p-2" required>
            <option value="">-- Select Category --</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Images */}
        <div>
          <label className="block font-semibold mb-1">Product Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-2"
          />

          {previews.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {previews.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Preview ${idx}`}
                  className="w-28 h-28 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-black cursor-pointer text-white px-4 py-2 mt-4"
        >
          {loading ? "Loading..." : 'Add Product'}
        </button>
      </form>
    </main>
  );
};

export default AddProduct;
