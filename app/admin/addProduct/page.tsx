'use client';

import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddProduct = () => {
  const [images, setImages] = useState<string[]>([]);

  const categories = [
    "men-fabric",
    "men-fragrance",
  ];

  // Handle image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...previews]);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaPlusCircle /> Add New Product
      </h1>

      <form className="grid gap-4">
        {/* Product Name */}
        <div>
          <label className="block font-semibold mb-1">Product Name</label>
          <input
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
            placeholder="Write product details..."
            className="w-full border rounded-lg p-2"
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price ($)</label>
          <input
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
            type="text"
            placeholder="e.g. Apple"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select className="w-full border rounded-lg p-2" required>
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

          {/* Preview Images */}
          {images.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {images.map((url, idx) => (
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
          className="bg-black text-white px-4 py-2 mt-4"
        >
          Add Product
        </button>
      </form>
    </main>
  );
};

export default AddProduct;
