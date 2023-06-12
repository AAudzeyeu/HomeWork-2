import { updateMoviesState } from "../api";
import {
	divContentSearchMovie,
	divTemplate,
	divMainMoviesCards,
	divContentContainer,
} from "../mainContent";

import { divMovieInfo } from "../movieInfo";

import { inputAddSubmit } from "../addMovie";
import { divAddMovieCongratulations } from "../addMovieCongratulation";
import { goToMovieDetails } from "../utils/search";

const { body } = document;

export const defaultPoster =
	"https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF894,1000_QL80_.jpg";
const background =
	"https://wallpapershome.ru/images/wallpapers/beguschiy-v-labirinte-lekarstvo-ot-smerti-1920x1080-beguschiy-v-labirinte-lekarstvo-ot-smerti-16947.jpg";

export const createMovieItem = (movie) => {
	const movieElement = divTemplate.cloneNode(true);
	divContentSearchMovie.style.background = `url("${background}")`;
	movieElement.querySelector("img").src = defaultPoster;
	movieElement.querySelector(".figcaption-name_movie").textContent =
		movie.title;

	movieElement.querySelector(".figcaption-smaller_movie").textContent =
		movie.genres.join(", ");

	movieElement.querySelector(".figcaption-date_movie").textContent = parseInt(
		movie.release_date,
		10
	);
	movieElement.dataset.id = movie.id;

	return movieElement;
};

export const createMovies = (container) => {
	const clickHandler = (e) => {
		const movieCard = e.target.closest("[data-id]");
		if (movieCard && e.target.classList.contains("card-picture")) {
			const { id } = movieCard.dataset;
			goToMovieDetails(id);
		}
	};
	container.addEventListener("click", clickHandler);
	updateMoviesState();
};

// const globalMovies = {};

// const onClick = (e) => {
// 	const { id } = e.target.closet("[data-id]").dataset;

// 	const movie = globalMovies[id];

// 	showModal(movie)
// }

const movieInfoDownload = () => {
	// formEditMovieForm.addEventListener("submit", (e) => {
	// 	e.preventDefault();
	// 	divEditMovieContainer.style.opacity = 0;
	// 	divEditMovieContainer.style.visibility = "hidden";
	// 	divContentSearchMovie.style.display = "none";
	// 	divMovieInfo.style.opacity = 1;
	// 	divMovieInfo.style.visibility = "visible";
	// 	divMovieInfo.style.position = "relative";
	// 	imgMovieInfo.src = defaultPoster;
	// 	divContentContainer.style.opacity = 1;
	// 	body.style.overflowY = "auto";
	// 	divContentMovieContainer.style.overflow = "auto";
	// 	paragraphHeaderDescription.textContent = inputEditTitle.value;
	// 	paragraphRating.textContent = inputEditRating.value;
	// 	paragraphDescriptionMovie.textContent = textareaOverview.value;
	// 	updateMovie()

	// 	const searchValue = new FormData(e.target).delete("button-movie__submit");
	// 	updateMoviesState({ search: searchValue });
	// });
	divMainMoviesCards.addEventListener("click", (e) => {
		if (e.target.classList.contains("button-movie__card")) {
			const modalEditOrDelete = e.target.previousSibling;
			modalEditOrDelete.firstChild.style.opacity = 1;
			modalEditOrDelete.firstChild.style.visibility = "visible";
			e.target.previousSibling.style.opacity = 1;
			e.target.previousSibling.style.visibility = "visible";
			e.target.style.visibility = "hidden";
			e.target.style.opacity = 0;
		}
		if (e.target.classList.contains("closeModal")) {
			const modalEditOrDelete = e.target.parentNode;
			e.target.style.visibility = "hidden";
			e.target.style.opacity = 0;
			modalEditOrDelete.style.opacity = 0;
			modalEditOrDelete.style.visibility = "hidden";
			modalEditOrDelete.nextSibling.style.visibility = "visible";
			modalEditOrDelete.nextSibling.style.opacity = 1;
		}
	});

	divMovieInfo.addEventListener("click", (e) => {
		if (e.target.classList.contains("magnifying-glass")) {
			divContentSearchMovie.style.position = "relative";
			divContentSearchMovie.style.opacity = 1;
			divContentSearchMovie.style.visibility = "visible";
			divMovieInfo.style.visibility = "hidden";
			divMovieInfo.style.opacity = 0;
			divMovieInfo.style.position = "absolute";
		}
	});
};

movieInfoDownload();

const submitAddMovie = () => {
	inputAddSubmit.addEventListener("click", (e) => {
		e.preventDefault();
		const container = document.querySelector(".content-container");
		const congratulationsWindow = document.querySelector(
			".add-movie__congratulations"
		);
		const contentMovieContainer = document.querySelector(
			".content-movie__container"
		);
		const addMovieContainer = document.querySelector(".add-movie__container");
		congratulationsWindow.style.visibility = "visible";
		congratulationsWindow.style.visibility = 1;
		addMovieContainer.style.visibility = "hidden";
		container.style.opacity = 1;
		body.style.overflowY = "auto";
		contentMovieContainer.style.overflow = "auto";
	});
};
submitAddMovie();

const closeCongratulations = () => {
	divAddMovieCongratulations.addEventListener("click", (e) => {
		if (e.target.classList.contains("closeModal")) {
			divAddMovieCongratulations.style.visibility = "hidden";
			divAddMovieCongratulations.style.opacity = 0;
			body.style.overflowY = "auto";
			divContentContainer.style.opacity = 1;
		}
	});
};
closeCongratulations();

export const showSuccessful = () => {
	divAddMovieCongratulations.style.visibility = "visible";
	divAddMovieCongratulations.style.opacity = 1;
	body.style.overflowY = "hidden";
	divContentContainer.style.opacity = 0.5;
};

export const showError = () => {
	alert("Ой ой ой... ошибочка");
};
