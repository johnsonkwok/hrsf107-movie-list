
const MovieListTitle = ({ movie }) => React.createElement(
  "tr",
  { className: "movieTitle" },
  React.createElement(
    "td",
    null,
    movie.title
  )
);

export default MovieListTitle;