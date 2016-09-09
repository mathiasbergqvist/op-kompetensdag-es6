import {starWarsMovies} from '../data/data';

starWarsMovies.map(movie => {
  document.write(movie.episode_id);
  document.write("<br>");
});

starWarsMovies.map(() => {
  document.write("hej");
  document.write("<br>");});
  
