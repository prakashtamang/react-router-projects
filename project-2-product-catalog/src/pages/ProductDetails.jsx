import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found.");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        <p className="mt-4 text-slate-600">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>

        <p className="mt-2 text-slate-600">
          {error || "The requested product does not exist."}
        </p>

        <Link
          to="/products"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/products"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Products
        </Link>
      </div>

      {/* Product */}
      <div className="grid overflow-hidden rounded-2xl border bg-white shadow-sm md:grid-cols-2">
        {/* Image */}
        <div className="flex min-h-125 items-center justify-center bg-white p-10">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-100 max-w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <span className="mb-4 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
            {product.title}
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <span className="text-3xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>

            <span className="rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700">
              ★ {product.rating.rate}
            </span>

            <span className="text-sm text-slate-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <div className="my-8 h-px bg-slate-200" />

          <h2 className="text-lg font-semibold text-slate-900">Description</h2>

          <p className="mt-3 leading-7 text-slate-600">{product.description}</p>

          <div className="mt-8">
            <button
              type="button"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
