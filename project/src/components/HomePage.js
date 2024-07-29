import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <div className="container mx-auto">
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-700">This is the home page content.</p>
      </div>
    </div>
  );
}

export default HomePage;
