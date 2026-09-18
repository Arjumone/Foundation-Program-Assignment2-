import { Link } from "react-router";

function HeroBanner() {
  return (
    <section className="min-h-[85vh] relative flex items-center">

      <img
        src="https://img.magnific.com/free-vector/red-movie-theater-seats-with-curtains-background_1017-38388.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Movie Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-5 text-white">

        <p className="text-red-500 font-bold text-lg mb-3">
          DISCOVER MOVIES
        </p>

        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Explore Your Favorite Movies
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mt-6">
          Discover amazing movies and TV shows from around
          the world. Search for your favorite titles and
          explore detailed information.
        </p>

        <Link
          to="/movies"
          className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-7 py-3 rounded-lg font-semibold"
        >
          Explore Now
        </Link>

      </div>
    </section>
  );
}

export default HeroBanner;