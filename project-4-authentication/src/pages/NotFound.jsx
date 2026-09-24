import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-900">404</h1>

        <p className="mt-4 text-xl text-gray-600">Page not found</p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
