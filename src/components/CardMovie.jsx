function CardMovie({ movie, setSelectedMovie }) {

  const year = movie.premiered
    ? movie.premiered.slice(0, 4)
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

      {/* Image */}
      <div className="h-80 bg-gray-700">

        {movie.image?.medium ? (
          <img
            src={movie.image.medium}
            alt={movie.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

      </div>

      {/* Content */}
      <div className="p-5 text-white">

        <h2 className="text-xl font-bold truncate">
          {movie.name}
        </h2>

        <div className="flex justify-between mt-3 text-gray-300">

          <span>
             {rating}
          </span>

          <span>
             {year}
          </span>

        </div>

        <button
          onClick={() => setSelectedMovie(movie)}
          className="w-full mt-5 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold"
        >
          See Details
        </button>

      </div>

    </div>
  );
}

export default CardMovie;