import "./style.scss";

import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { createMovies } from "./components/movies";
import { createAddMovieForm } from "./addMovie";
import {
	createMainContentContainer,
	divMainMoviesCards,
	buttonContainer,
} from "./mainContent";
import { createAddMovieCongratulations } from "./addMovieCongratulation";

const { body } = document;

const initApp = () => {
	createAddMovieForm(body);
	createAddMovieCongratulations(body);
	createMainContentContainer(body);
	createMovies(divMainMoviesCards);
	createMoreButton(buttonContainer);
};

initApp();

const addMovie = () => {
	const button = document.querySelector(".button-add__movie");
	const container = document.querySelector(".content-container");
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
