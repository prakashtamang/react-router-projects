import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import SearchBar from "../components/SearchBar";

const PRODUCTS_PER_PAGE = 8;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  //   Read state from URL
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page")) || 1;

  //   Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //   Get Unique Categories
  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  //   Search + Filter + Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const searchTerm = search.toLowerCase();

      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm),
      );
    }

    // Category
    if (category) {
      result = result.filter((product) => product.category === category);
    }

    // Sorting
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;

      case "title-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "title-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }
    return result;
  }, [products, search, category, sort]);

  //   Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const safePage =
    totalPages === 0 ? 1 : Math.min(Math.max(page, 1), totalPages);

  const startIndex = (safePage - 1) * PRODUCTS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  //   Update URL helper
  const updateSearhParams = (updates) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    setSearchParams(params);
  };

  //   Search
  const handleSearchChange = (value) => {
    updateSearhParams({
      search: value,
      page: 1,
    });
  };

  //   Category
  const handleCategoryChange = (value) => {
    updateSearhParams({
      category: value,
      page: 1,
    });
  };

  //   Sort
  const handleSortChanges = (value) => {
    updateSearhParams({
      sort: value,
      page: 1,
    });
  };

  //   Pagination
  const handlePageChange = (newPage) => {
    updateSearhParams({
      page: newPage === 1 ? "" : newPage,
    });
  };

  //   Reset everything
  const handleReset = () => {
    setSearchParams({});
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
        <p className="mt-4 text-slate-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p className="mt-2 text-slate-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Products
        </h1>
        <p className="mt-2 text-slate-600">
          Browse, search, filter, sort and explore products
        </p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <SearchBar value={search} onChange={handleSearchChange} />
      </div>

      {/* Filters */}
      <ProductFilters
        category={category}
        sort={sort}
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChanges}
        onReset={handleReset}
      />

      {/* Result information */}
      <div className="my-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {paginatedProducts.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-900">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {(search || category || sort) && (
          <div className="flex flex-wrap gap-2 text-xs">
            {search && (
              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                Search: {search}
              </span>
            )}

            {category && (
              <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700">
                Category: {category}
              </span>
            )}

            {sort && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                Sort: {sort}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Products */}
      {paginatedProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border bg-white px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            No products found
          </h2>

          <p className="mt-2 text-slate-600">
            Try changing your search or filter.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Products;
