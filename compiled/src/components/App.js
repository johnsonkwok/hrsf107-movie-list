import MovieList from './MovieList.js';
import movies from '../data/movieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };
  }

  render() {
    return React.createElement(MovieList, { movies: this.state.movies });
  }
}

export default App;