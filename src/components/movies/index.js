import defaultImage from "../../../public/images/card-2.png";
import { getMovies } from "../../api";
import { searchToObject } from "../../utils/search";


// console.log(template);
// const defaultPoster =
// 	"https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF894,1000_QL80_.jpg";
const background =
	"https://wallpapershome.ru/images/wallpapers/beguschiy-v-labirinte-lekarstvo-ot-smerti-1920x1080-beguschiy-v-labirinte-lekarstvo-ot-smerti-16947.jpg";

export const createMovie = (movie) => {
	const movieElement = template.content.cloneNode(true);
	const backgroundLogo = document.querySelector(".content-search__movie");
	backgroundLogo.style.background = `url(${background})`;

	movieElement.querySelector("img").onerror = (e) => {
		e.target.src = defaultImage;
	};
	movieElement.querySelector(".figcaption-name_movie").textContent =
		movie.title;

	movieElement.querySelector(".figcaption-smaller_movie").textContent =
		movie.genres.join(", ");

	movieElement.querySelector(".figcaption-date_movie").textContent = parseInt(
		movie.release_date,
		10
	);

	return movieElement;
};

export const createMovies = (container) => {
	const params = window.location.search;
	console.log(searchToObject(params));
	getMovies().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);

		container.append(...moviesElements);
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
// 			imgMovieInfo.src = defaultImage;
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

// const submitAddMovie = () => {
// 	const submitButton = document.querySelector(".button-movie__submit");
// 	submitButton.addEventListener("click", (e) => {
// 		e.preventDefault();
// 		const container = document.querySelector(".content-container");
// 		const congratulationsWindow = document.querySelector(
// 			".add-movie__congratulations"
// 		);
// 		const body = document.querySelector("body");
// 		const contentMovieContainer = document.querySelector(
// 			".content-movie__container"
// 		);
// 		const addMovieContainer = document.querySelector(".add-movie__container");
// 		congratulationsWindow.style.visibility = "visible";
// 		addMovieContainer.style.visibility = "hidden";
// 		container.style.opacity = "1";
// 		body.style.overflowY = "auto";
// 		contentMovieContainer.style.overflow = "auto";
// 	});
// };
// submitAddMovie();

// const closeCongratulations = () => {
// 	const congratulationsWindow = document.querySelector(
// 		".add-movie__congratulations"
// 	);
// 	congratulationsWindow.addEventListener("click", (e) => {
// 		if (e.target.classList.contains("closeModal")) {
// 			congratulationsWindow.style.visibility = "hidden";
// 		}
// 	});
// };
// closeCongratulations();
