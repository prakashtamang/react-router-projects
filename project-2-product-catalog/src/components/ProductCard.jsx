import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border-bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-64 items-center justify-center bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-blue-600">
          {product.category}
        </p>

        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-slate-900">
          {product.title}
        </h2>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-amber-600">
            {" "}
            ★ {product.rating.rate}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
