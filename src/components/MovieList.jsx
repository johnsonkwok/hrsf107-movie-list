import MovieListTitle from './MovieListTitle.js';

const MovieList = ({movies}) => (
  <div className="movieList">
    <table>
      <tbody>
        {movies.map((movie, index) =>
          <MovieListTitle key ={index} movie={movie} />
        )}
      </tbody>
    </table>
  </div>
);

export default MovieList;