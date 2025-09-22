"use client";

import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

const categories = [
  "men-fabric",
  "men-fragrance",
  "men-accessories",
  "men-tshirt",
  "women-accessories",
  "women-fragrance",
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateProduct = ({ data }: {data: any}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ ...data });
  const router = useRouter()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { name, type, value, checked } = e.target as any;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) return;
  const selectedFiles = Array.from(e.target.files);

  // append to old files instead of replacing
  setFiles((prev) => [...prev, ...selectedFiles]);

  const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
  setPreviews((prev) => [...prev, ...newPreviews]);
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const updateData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        updateData.append(key, value as any);
      }
    });

    files.forEach((file) => updateData.append("images", file));

    try {
      const res = await axios.patch(`/api/products/${formData._id}`, updateData);

      if (res.status === 200) {
        toast.success("Product updated successfully!");
        router.push("/admin/productList")
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
      toast.error("Failed to update product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-4 w-full md:w-[50%]" onSubmit={handleSubmit}>
      {/* Name */}
      <label className="block font-semibold">Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product name"
        className="border rounded p-2"
      />

      {/* Description */}
      <label className="block font-semibold">Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="border rounded p-2 h-[100px]"
      />

      {/* Price */}
      <label className="block font-semibold">Price</label>
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        className="border rounded p-2"
      />

      {/* Discount + On Sale */}
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="isSale"
          checked={formData.isSale}
          onChange={handleChange}
        />
        <label>On Sale</label>
        {formData.isSale && (
            <>
              <label className="block font-semibold">DiscountPrice</label>
                <input
                    name="discountPrice"
                    type="number"
                    value={formData.discountPrice || ""}
                    onChange={handleChange}
                    className="border rounded p-2"
                    placeholder="Discount Price"
                />
          </>
        )}
      </div>

      {/* Brand */}
      <label className="block font-semibold">Brand</label>
      <input
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        className="border rounded p-2"
        placeholder="Brand"
      />

      {/* Color */}
      <label className="block font-semibold">Color</label>
      <input
        name="color"
        value={formData.color}
        onChange={handleChange}
        className="border rounded p-2"
        placeholder="Color"
      />

      {/* Gender */}
      <label className="block font-semibold">Gender</label>
      <select name="gender" value={formData.gender} onChange={handleChange} className="border rounded p-2">
        <option value="">-- Select Gender --</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="unisex">Unisex</option>
      </select>

      {/* Category */}
      <label className="block font-semibold">Category</label>
      <select name="category" value={formData.category} onChange={handleChange} className="border rounded p-2">
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Conditional fields */}
      {formData.category.includes("fabric") && (
        <>
        <label className="block font-semibold">Length</label>
          <input
            name="length"
            value={formData.length || ""}
            onChange={handleChange}
            placeholder="Length (e.g. 3 meters)"
            className="border rounded p-2"
          />
          <label className="block font-semibold">Material</label>
          <input
            name="material"
            value={formData.material || ""}
            onChange={handleChange}
            placeholder="Material (e.g. Cotton)"
            className="border rounded p-2"
          />
        </>
      )}

      {formData.category.includes("fragrance") && (
        <>
            <label className="block font-semibold">Fragrance Type</label>
            <input
            name="fragranceType"
            value={formData.fragranceType || ""}
            onChange={handleChange}
            placeholder="Fragrance Type"
            className="border rounded p-2"
            />
        </>
      )}

      {/* In Stock */}
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="inStock"
          checked={formData.inStock}
          onChange={handleChange}
        />
        <label>In Stock</label>
      </div>

      {/* New Arrival */}
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="isNewArrival"
          checked={formData.isNewArrival}
          onChange={handleChange}
        />
        <label>New Arrival</label>
      </div>

      {/* Images */}
      <div>
        <label className="py-2 font-semibold block">Update Images</label>
        <input type="file" multiple accept="image/*" onChange={handleImageChange} />
       <div className="flex gap-3 mt-3 flex-wrap">
        {formData.images.map((url: string, idx: number) => (
            <Image width={200} height={200} alt="image" key={`old-${idx}`} src={url} className="w-20 h-20 rounded border object-cover" />
        ))}
        {previews.map((url, idx) => (
            <Image width={200} height={200} alt="image" key={`new-${idx}`} src={url} className="w-20 h-20 rounded border object-cover" />
        ))}
        </div>

      </div>

      <button type="submit" className="bg-black cursor-pointer text-white p-2 rounded">
        {loading ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
};

export default UpdateProduct;
