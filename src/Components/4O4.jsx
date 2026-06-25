import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        <h1 className="text-[120px] font-extrabold text-orange-500 leading-none">
          404
        </h1>

        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/"
            className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Go Home
          </Link>

          <Link
            to="/shop"
            className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="mt-12">
          <img
            src="https://illustrations.popsy.co/amber/crashed-error.svg"
            alt="404 Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;