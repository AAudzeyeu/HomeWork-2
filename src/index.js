import "./style.scss";

import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { createMovies } from "./components/movies";
import { createMovieInfo } from "./movieInfo";
import { createAddMovieForm, divAddMovieContainer } from "./addMovie";
import { createAddMovieCongratulations } from "./addMovieCongratulation";
import { createEditMovieForm, divEditMovieContainer } from "./editMovie";
import {
	createDeleteMovieCongratulations,
	divDeleteMovieCongratulations,
} from "./deleteMovie";
import {
	createMainContentContainer,
	divMainMoviesCards,
	buttonContainer,
	buttonAddMovie,
	divContentContainer,
	divContentMovieContainer,
} from "./mainContent";
import { createMovieDetails } from "./components/movieDetails";

const { body } = document;

const addMovie = () => {
	buttonAddMovie.addEventListener("click", () => {
		divContentContainer.style.opacity = 0.5;
		body.style.overflowY = "hidden";
		divContentMovieContainer.style.overflow = "hidden";
		divAddMovieContainer.style.visibility = "visible";
		divAddMovieContainer.style.opacity = 1;
	});
	divAddMovieContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("closeModal")) {
			divContentContainer.style.opacity = 1;
			body.style.overflowY = "auto";
			divContentMovieContainer.style.overflow = "auto";
			divAddMovieContainer.style.visibility = "hidden";
			divAddMovieContainer.style.opacity = 0;
		}
	});
};

const editMovie = (movieItem) => {
	const event = new CustomEvent("showModal", {
		detail: movieItem,
	});

	document.dispatchEvent(event);

	divMainMoviesCards.addEventListener("click", (e) => {
		if (e.target.classList.contains("text-modal__edit")) {
			const modalEditOrDelete = e.target.parentNode;
			modalEditOrDelete.style.opacity = 0;
			modalEditOrDelete.style.visibility = "hidden";
			modalEditOrDelete.nextSibling.style.opacity = 1;
			modalEditOrDelete.nextSibling.style.visibility = "visible";
			divContentContainer.style.opacity = 0.5;
			body.style.overflowY = "hidden";
			divEditMovieContainer.style.opacity = 1;
			divEditMovieContainer.style.visibility = "visible";
		}
	});

	divEditMovieContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("closeModal")) {
			divContentContainer.style.opacity = 1;
			body.style.overflowY = "auto";
			divContentMovieContainer.style.overflow = "auto";
			divEditMovieContainer.style.visibility = "hidden";
		}
	});
};

const deleteMovie = () => {
	divMainMoviesCards.addEventListener("click", (e) => {
		if (e.target.classList.contains("text-modal__delete")) {
			const modalDeleteMovie = e.target.parentNode;
			modalDeleteMovie.style.opacity = 0;
			modalDeleteMovie.style.visibility = "hidden";
			modalDeleteMovie.nextSibling.style.opacity = 1;
			modalDeleteMovie.nextSibling.style.visibility = "visible";
			divContentContainer.style.opacity = 0.5;
			body.style.overflowY = "hidden";
			divContentMovieContainer.style.overflow = "hidden";
			divDeleteMovieCongratulations.style.visibility = "visible";
			divDeleteMovieCongratulations.style.opacity = 1;
		}
	});

	const movieId = 0;

	divDeleteMovieCongratulations.addEventListener("click", (e) => {
		if (e.target.classList.contains("closeModal")) {
			divContentContainer.style.opacity = 1;
			body.style.overflowY = "auto";
			divContentMovieContainer.style.overflow = "auto";
			divDeleteMovieCongratulations.style.visibility = "hidden";
			divDeleteMovieCongratulations.style.opacity = 0;
		}
	});
	divDeleteMovieCongratulations.addEventListener("click", (e) => {
		if (e.target.classList.contains("button-delete__movie")) {
			console.log(e.currentTarget);
		}
	});
};

const renderHomePage = () => {
	addMovie();
	editMovie();
	deleteMovie();
};

const initApp = () => {
	createAddMovieForm(body);
	createAddMovieCongratulations(body);
	createEditMovieForm(body);
	createDeleteMovieCongratulations(body);
	createMainContentContainer(body);
	createMovies(body);
	createMovieInfo(body);
	createMoreButton(buttonContainer);

	const { pathname } = window;
	const movieDetailsRegex = /\/movies\//gi;

	if (movieDetailsRegex.test(pathname)) {
		createMovieDetails();
	} else {
		renderHomePage();
	}
};

initApp();
