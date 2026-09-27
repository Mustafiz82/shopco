"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import {
  FiBold,
  FiItalic,
  FiCode,
  FiList,
  FiLink,
  FiImage,
  FiStar,
  FiPercent,
  FiDollarSign,
  FiArrowLeft,
  FiEye,
} from "react-icons/fi";

const InitializedMDXEditor = dynamic(
  () => import("@/components/Editor/Editor"),
  {
    ssr: false,
  },
);
const AddProductPage = () => {
  // 1. State for MDX editor value
  const [mdxContent, setMdxContent] = useState("");

  const [originalPrice, setOriginalPrice] = useState(0);
  const [discounttedPrice, setDiscounttedPrice] = useState(0);
  const [discounttedPercent, setDiscounttedPercent] = useState(0);

  const ref = useRef()

  const handleChangePrice = (e) => {
    let discountedPriceValue = Number(e.target.value);

    if (!originalPrice) return;

    if (discountedPriceValue > originalPrice) {
      discountedPriceValue = originalPrice;
    }

    setDiscounttedPrice(discountedPriceValue);

    let discountRate =
      ((originalPrice - discountedPriceValue) / originalPrice) * 100;

    setDiscounttedPercent(discountRate.toFixed(2));
  };

  const handleChangePercent = (e) => {
    let discountPercentRate = e.target.value;
    setDiscounttedPercent(discountPercentRate);

    let discountAmount =
      originalPrice - originalPrice * (discountPercentRate / 100);

    setDiscounttedPrice(discountAmount.toFixed(2));
  };

  const handleChangeOriginalPrice = (e) => {
    let originalPrice = e.target.value;
    setOriginalPrice(originalPrice);

    if (discounttedPercent) {
      let discountAmount =
        originalPrice - originalPrice * (discounttedPercent / 100);
      setDiscounttedPrice(discountAmount);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const productData = {
      product_name: e.target.product_name.value,
      short_description: e.target.short_description.value,
      long_description_mdx: ref.current?.getMarkdown(), 
      original_price: originalPrice,
      discount_price: discounttedPrice,
      discount: discounttedPercent,
      size: e.target.size.value,
      color: e.target.color.value,
      rating: e.target.rating.value,
    };

    // 3. Console log the collected data object
    console.log("Submitted Product Data:", productData);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 py-8 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
        {/* Top Navigation / Breadcrumb & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200">
          <div>
            <button
              type="button"
              className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-neutral-500 hover:text-black mb-2 transition-colors"
            >
              <FiArrowLeft className="mr-1.5 h-4 w-4" /> Back to Products
            </button>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              Add New Product
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Fill in the details below to create your product listing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors bg-white shadow-sm"
            >
              Save Draft
            </button>
            {/* Changed type to submit */}
            <button
              //   type="submit"
              className="px-5 py-2 text-sm font-medium text-white bg-neutral-950 rounded-lg hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Publish Product
            </button>
          </div>
        </div>

        {/* Form Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column (2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Information Card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-base font-semibold uppercase tracking-wider text-neutral-900 mb-5">
                General Information
              </h2>

              <div className="space-y-5">
                {/* Product Name */}
                <div>
                  <label
                    htmlFor="product_name"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="product_name"
                    name="product_name"
                    type="text"
                    required
                    placeholder="e.g. Minimalist Oversized Cotton T-Shirt"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
                  />
                </div>

                {/* Short Description */}
                <div>
                  <label
                    htmlFor="short_description"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Short Description
                  </label>
                  <textarea
                    id="short_description"
                    name="short_description"
                    rows={3}
                    placeholder="A brief summary for previews, cards, and quick views..."
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition resize-none"
                  />
                  <p className="text-xs text-neutral-400 mt-1">
                    Recommended: 120-160 characters.
                  </p>
                </div>
              </div>
            </div>

            {/* MDX Long Description Editor Mockup */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold uppercase tracking-wider text-neutral-900">
                  Long Description (MDX Supported)
                </label>
                <span className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded text-neutral-600 border border-neutral-200">
                  .mdx format
                </span>
              </div>

              {/* Editor Container */}

              <InitializedMDXEditor
                 editorRef={ref}
              />
            </div>
          </div>

          {/* Sidebar Column (1/3 width on large screens) */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-base font-semibold uppercase tracking-wider text-neutral-900 mb-5">
                Pricing & Discounts
              </h2>

              <div className="space-y-4">
                {/* Original Price */}
                <div>
                  <label
                    htmlFor="original_price"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Original Price
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <FiDollarSign className="w-4 h-4" />
                    </div>
                    <input
                      id="original_price"
                      name="original_price"
                      type="number"
                      placeholder="0.00"
                      onChange={handleChangeOriginalPrice}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Discount Price */}
                <div>
                  <label
                    htmlFor="discount_price"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Discount Price
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <FiDollarSign className="w-4 h-4" />
                    </div>
                    <input
                      id="discount_price"
                      name="discount_price"
                      onChange={handleChangePrice}
                      value={discounttedPrice}
                      type="number"
                      placeholder="0.00"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Discount Percentage */}
                <div>
                  <label
                    htmlFor="discount"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Discount Rate
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <FiPercent className="w-4 h-4" />
                    </div>
                    <input
                      id="discount"
                      name="discount"
                      onChange={handleChangePercent}
                      value={discounttedPercent || 0}
                      type="number"
                      placeholder="e.g. 20"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Attributes Card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-base font-semibold uppercase tracking-wider text-neutral-900 mb-5">
                Attributes
              </h2>

              <div className="space-y-4">
                {/* Size Dropdown */}
                <div>
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Size
                  </label>
                  <select
                    id="size"
                    name="size"
                    defaultValue=""
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a size
                    </option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">X-Large</option>
                  </select>
                </div>

                {/* Color Input */}
                <div>
                  <label
                    htmlFor="color"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Primary Color
                  </label>
                  <div className="flex items-center gap-3 p-2 bg-neutral-50 border border-neutral-300 rounded-lg">
                    <input
                      id="color"
                      name="color"
                      type="color"
                      defaultValue="#000000"
                      className="w-9 h-9 rounded cursor-pointer border border-neutral-300 bg-transparent p-0"
                    />
                    <span className="text-xs font-mono text-neutral-600">
                      Pick product base color
                    </span>
                  </div>
                </div>

                {/* Rating (out of 5) */}
                <div>
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-neutral-700 mb-1.5"
                  >
                    Rating (Out of 5)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <FiStar className="w-4 h-4" />
                    </div>
                    <input
                      id="rating"
                      name="rating"
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      placeholder="e.g. 4.8"
                      className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
