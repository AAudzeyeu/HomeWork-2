import { getMovies } from "../api";
import { parseDate } from "../utils/date";
// import {defaultImage} from "../../public/img/"

const container = document.querySelector(".content-movie__container");
const template = document.getElementById("movie-item");
const defaultPoster =
	"https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF894,1000_QL80_.jpg";

const createMovie = (movie) => {
	const movieElement = template.content.cloneNode(true);

	movieElement.querySelector("img").onerror = (e) => {
		e.target.src = defaultPoster;
	};
	movieElement.querySelector(".figcaption-name_movie").textContent =
		movie.title;
	movieElement.querySelector(".figcaption-smaller_movie").textContent =
		movie.genres.toString();
	movieElement.querySelector(".figcaption-date_movie").textContent =
		parseDate(movie);

	return movieElement;
};

export const createMovies = () => {
	getMovies().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);

		container.append(...moviesElements);
	});
};
