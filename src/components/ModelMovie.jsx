function ModelMovie({ selectedMovie, setSelectedMovie }) {

  if (!selectedMovie) {
    return null;
  }

  const rating = selectedMovie.rating?.average || "N/A";

  const year = selectedMovie.premiered
    ? selectedMovie.premiered.slice(0, 4)
    : "N/A";

  return (
    <div
      onClick={() => setSelectedMovie(null)}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 text-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
      >

        {/* Close */}
        <div className="flex justify-end p-4">

          <button
            onClick={() => setSelectedMovie(null)}
            className="text-2xl hover:text-red-500"
          >
            ✕
          </button>

        </div>

        {/* Poster */}
        <div className="px-5">

          {selectedMovie.image?.original ? (
            <img
              src={selectedMovie.image.original}
              alt={selectedMovie.name}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          ) : (
            <div className="h-64 bg-gray-700 flex items-center justify-center">
              No Image
            </div>
          )}

        </div>

        {/* Details */}
        <div className="p-6">

          <h2 className="text-3xl font-bold">
            {selectedMovie.name}
          </h2>

          <div className="flex flex-wrap gap-5 mt-4 text-gray-300">

            <span>
              ⭐ Rating: {rating}
            </span>

            <span>
              📅 Release: {year}
            </span>

          </div>

          {/* Genre */}
          {selectedMovie.genres?.length > 0 && (
            <div className="mt-5">

              <h3 className="font-bold mb-2">
                Genre
              </h3>

              <div className="flex flex-wrap gap-2">

                {selectedMovie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="bg-red-600 px-3 py-1 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}

              </div>

            </div>
          )}

          {/* Summary */}
          <div className="mt-6">

            <h3 className="text-xl font-bold mb-2">
              Overview
            </h3>

            <div
              className="text-gray-300 leading-7"
              dangerouslySetInnerHTML={{
                __html:
                  selectedMovie.summary ||
                  "No description available.",
              }}
            />

          </div>

          <button
            onClick={() => setSelectedMovie(null)}
            className="mt-7 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default ModelMovie;