import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-lg rounded-xl bg-white p-10 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          React Router Authentication
        </h1>
        <p className="mb-8 text-gray-600">
          Authentication, protected routes and role-based authorization with
          React Router.
        </p>

        {isAuthenticated ? (
          <Link
            to="/dashboard"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Go to Dashboard
          </Link>
        ) : (
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
