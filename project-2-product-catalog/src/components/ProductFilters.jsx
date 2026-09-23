import React from "react";

const ProductFilters = ({
  category,
  sort,
  categories,
  onCategoryChange,
  onSortChange,
  onReset,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-end">
      <div className="flex-1">
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label
          htmlFor="sort"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Sort By
        </label>

        <select
          id="sort"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">Name: A to Z</option>
          <option value="title-desc">Name: Z to A</option>
        </select>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Reset
      </button>
    </div>
  );
};

export default ProductFilters;
