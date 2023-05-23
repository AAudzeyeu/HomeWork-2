import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { createMovies } from "./components/movies";
import "./style.scss";

const addMovie = () => {
	const button = document.querySelector(".button-add__movie");
	const container = document.querySelector(".content-container");
	const body = document.querySelector("body");
	const addMovieContainer = document.querySelector(".add-movie__container");
	const contentMovieContainer = document.querySelector(
		".content-movie__container"
	);

	button.addEventListener("click", () => {
		container.style.opacity = 0.5;
		body.style.overflowY = "hidden";
		contentMovieContainer.style.overflow = "hidden";
		addMovieContainer.style.visibility = "visible";
	});
	addMovieContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("closeModal")) {
			container.style.opacity = 1;
			body.style.overflowY = "auto";
			contentMovieContainer.style.overflow = "auto";
			addMovieContainer.style.visibility = "hidden";
		}
	});
};

addMovie();

const initApp = () => {
	const moviesContainer = document.querySelector(".main-movies__cards");
	createMovies(moviesContainer);
	const buttonContainer = document.querySelector(".button-container");
	createMoreButton(buttonContainer);
};

initApp();
