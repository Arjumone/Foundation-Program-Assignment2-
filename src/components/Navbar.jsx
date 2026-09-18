import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-950 text-white px-5 md:px-10 py-4 sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <button className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3163/3163478.png"
            alt="MovieExplorer Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold ml-2">
            MovieExplorer
          </span>
        </button>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-red-500"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
          >
            Movies
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;