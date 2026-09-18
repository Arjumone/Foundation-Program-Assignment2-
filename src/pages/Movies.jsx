import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import ModelMovie from "../components/ModelMovie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      let url = "https://api.tvmaze.com/shows";

      if (search) {
        url = `https://api.tvmaze.com/search/shows?q=${search}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (search) {
        setMovies(data.map((item) => item.show));
      } else {
        setMovies(data);
      }
    }

    getMovies();
  }, [search]);

  return (
    <div className="bg-gray-950 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Explore Movies & Shows
        </h1>

     
        <div className="max-w-2xl mx-auto mb-10 sticky top-0 z-10 py-3 bg-gray-950">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-white w-full px-5 py-4 rounded-lg outline-none border"
          />
        </div>

      
        {movies.length === 0 && (
          <p className="text-gray-400 text-center text-xl">
            No movies found.
          </p>
        )}

        
        {movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <CardMovie
                key={movie.id}
                movie={movie}
                setSelectedMovie={setSelectedMovie}
              />
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      <ModelMovie
        selectedMovie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default Movies;