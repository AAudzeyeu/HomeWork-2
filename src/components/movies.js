import { getMovies } from "../api";
import {
	divMainMoviesCards,
	divContentSearchMovie,
	divTemplate,
} from "../mainContent";

import { inputAddSubmit, divAddMovieCongratulations } from "../addMovie";

const defaultPoster =
	"https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF894,1000_QL80_.jpg";
const background =
	"https://wallpapershome.ru/images/wallpapers/beguschiy-v-labirinte-lekarstvo-ot-smerti-1920x1080-beguschiy-v-labirinte-lekarstvo-ot-smerti-16947.jpg";

const createMovie = (movie) => {
	const movieElement = divTemplate.cloneNode(true);
	divContentSearchMovie.style.background = `url("${background}")`;
	console.log();
	movieElement.querySelector("img").src = defaultPoster;
	movieElement.querySelector(".figcaption-name_movie").textContent =
		movie.title;

	movieElement.querySelector(".figcaption-smaller_movie").textContent =
		movie.genres.join(", ");

	movieElement.querySelector(".figcaption-date_movie").textContent = parseInt(
		movie.release_date,
		10
	);
	console.log(movieElement);
	return movieElement;
};

export const createMovies = () => {
	getMovies().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);
		console.log(moviesElements);

		divMainMoviesCards.append(...moviesElements);
	});
};

// const movieInfoDownload = () => {
// 	const contentMovieContainer = document.querySelector(
// 		".content-movie__container"
// 	);
// 	const contentSearchMovie = document.querySelector(".content-search__movie");
// 	const movieInfo = document.getElementById("movie-info");
// 	const imgMovieInfo = document.querySelector(".img-movie__info");
// 	contentMovieContainer.addEventListener("click", (e) => {
// 		if (e.target.classList.contains("card-picture")) {
// 			contentSearchMovie.style.display = "none";
// 			movieInfo.style.visibility = "visible";
// 			movieInfo.style.position = "relative";
// 			imgMovieInfo.src = defaultPoster;
// 		}
// 	});
// 	movieInfo.addEventListener("click", (e) => {
// 		if (e.target.classList.contains("magnifying-glass")) {
// 			contentSearchMovie.style.display = "block";
// 			movieInfo.style.visibility = "hidden";
// 			movieInfo.style.position = "absolute";
// 		}
// 	});
// };

// movieInfoDownload();

const submitAddMovie = () => {
	inputAddSubmit.addEventListener("click", (e) => {
		e.preventDefault();
		const container = document.querySelector(".content-container");
		const congratulationsWindow = document.querySelector(
			".add-movie__congratulations"
		);
		const body = document.querySelector("body");
		const contentMovieContainer = document.querySelector(
			".content-movie__container"
		);
		const addMovieContainer = document.querySelector(".add-movie__container");
		congratulationsWindow.style.visibility = "visible";
		addMovieContainer.style.visibility = "hidden";
		container.style.opacity = "1";
		body.style.overflowY = "auto";
		contentMovieContainer.style.overflow = "auto";
	});
};
submitAddMovie();

const closeCongratulations = () => {
	divAddMovieCongratulations.addEventListener("click", (e) => {
		if (e.target.classList.contains("closeModal")) {
			divAddMovieCongratulations.style.visibility = "hidden";
		}
	});
};
closeCongratulations();
