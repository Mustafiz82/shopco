"use client";
import React, { useEffect, useState } from "react";
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

const AddProductPage = () => {
  // 1. State for MDX editor value
  const [mdxContent, setMdxContent] = useState("");

  const [originalPrice, setOriginalPrice] = useState(0);
  const [discounttedPrice, setDiscounttedPrice] = useState(0);
  const [discounttedPercent, setDiscounttedPercent] = useState(0);


  const handlechangeDicoutPercent = (el) => {
    if(el.code == "enter") {
        console.log("enter pressse");
    }
    else {
        return
    }
    
  }


//   useEffect(() => {

//     if(discounttedPrice) {
//         let discount = ((originalPrice - (discounttedPrice || 0))/originalPrice) * 100
//        setDiscounttedPercent(discount)
//     }
//     else if (discounttedPercent) {
//         let discountPer = originalPrice * (discounttedPercent/100)
//         setDiscounttedPrice(discountPer)
//     }
//   } , [discounttedPrice , originalPrice , discounttedPercent])




  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Extract values using e.target.<name>.value and state for MDX
    const productData = {
      product_name: e.target.product_name.value,
      short_description: e.target.short_description.value,
      long_description_mdx: mdxContent, // from state
      original_price: e.target.original_price.value,
      discount_price: e.target.discount_price.value,
      discount: e.target.discount.value,
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
              <div className="border border-neutral-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-neutral-900 focus-within:border-transparent transition">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-2 bg-neutral-50 border-b border-neutral-200 text-neutral-600">
                  <button
                    type="button"
                    title="Bold"
                    className="p-1.5 hover:bg-white hover:text-black rounded border border-transparent hover:border-neutral-200 transition"
                  >
                    <FiBold className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Italic"
                    className="p-1.5 hover:bg-white hover:text-black rounded border border-transparent hover:border-neutral-200 transition"
                  >
                    <FiItalic className="w-4 h-4" />
                  </button>
                  <div className="w-[1px] h-4 bg-neutral-300 mx-1" />
                  <button
                    type="button"
                    title="Bullet List"
                    className="p-1.5 hover:bg-white hover:text-black rounded border border-transparent hover:border-neutral-200 transition"
                  >
                    <FiList className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Code Block"
                    className="p-1.5 hover:bg-white hover:text-black rounded border border-transparent hover:border-neutral-200 transition"
                  >
                    <FiCode className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Insert Link"
                    className="p-1.5 hover:bg-white hover:text-black rounded border border-transparent hover:border-neutral-200 transition"
                  >
                    <FiLink className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Insert Image"
                    className="p-1.5 hover:bg-white hover:text-black rounded border border-transparent hover:border-neutral-200 transition"
                  >
                    <FiImage className="w-4 h-4" />
                  </button>

                  <div className="ml-auto flex items-center">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-neutral-600 bg-white border border-neutral-200 rounded hover:text-black"
                    >
                      <FiEye className="w-3.5 h-3.5" /> Preview
                    </button>
                  </div>
                </div>

                {/* Editor Content Area (Controlled by State) */}
                <textarea
                  rows={8}
                  value={mdxContent}
                  onChange={(e) => setMdxContent(e.target.value)}
                  placeholder={`# Product Overview\n\nWrite in-depth specifications, features, care instructions, or import custom React components directly using MDX syntax...`}
                  className="w-full p-4 font-mono text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 bg-white focus:outline-none resize-y"
                />
              </div>
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
                      onChange={(e) => setOriginalPrice(e.target.value)}
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
                      onChange={(e) => setDiscounttedPrice(e.target.value)}
                      onKeyDown={handlechangeDicoutPercent}
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
                      onChange={(e) => setDiscounttedPercent(e.target.value)}
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
