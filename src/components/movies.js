import { updateMoviesState } from "../api";
import {
	divContentSearchMovie,
	divTemplate,
	divMainMoviesCards,
	divContentContainer,
} from "../mainContent";
import { renderHeaderOrDetails } from "../index";

import { divMagnifyingGlass } from "../movieInfo";

import { inputAddSubmit } from "../addMovie";
import { divAddMovieCongratulations } from "../addMovieCongratulation";
import { goToMovieDetails, goToClosedMovieDetails } from "../utils/search";
import { makeSafeImage } from "../utils/img";

const { body } = document;

const background =
	"https://wallpapershome.ru/images/wallpapers/beguschiy-v-labirinte-lekarstvo-ot-smerti-1920x1080-beguschiy-v-labirinte-lekarstvo-ot-smerti-16947.jpg";

export const createMovieItem = (movie) => {
	const movieElement = divTemplate.cloneNode(true);
	const movieImg = movieElement.querySelector("img");
	divContentSearchMovie.style.background = `url("${background}")`;
	movieImg.src = movie.poster_path;
	makeSafeImage(movieImg);
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

export const createMovieDocumentary = (movie) => {
	const movieElement = divTemplate.cloneNode(true);
	const movieImg = movieElement.querySelector("img");
	divContentSearchMovie.style.background = `url("${background}")`;

	movieImg.src = movie.poster_path;
	makeSafeImage(movieImg);
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

			renderHeaderOrDetails();
		}
	};
	container.addEventListener("click", clickHandler);
};

const movieInfoDownload = () => {
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

	divMagnifyingGlass.addEventListener("click", goToClosedMovieDetails);
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
