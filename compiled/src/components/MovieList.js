import MovieListTitle from './MovieListTitle.js';

const MovieList = ({ movies }) => React.createElement(
  "div",
  { className: "movieList" },
  React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      movies.map((movie, index) => React.createElement(MovieListTitle, { key: index, movie: movie }))
    )
  )
);

export default MovieList;