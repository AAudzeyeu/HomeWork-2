import "./test.scss";
import "./style.scss";

import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { createMovies } from "./components/movies";
import { createMovieInfo } from "./movieInfo";
import {
	createAddMovieForm,
	divAddMovieContainer,
	formAddMovieForm,
} from "./addMovie";
import {
	createAddMovieCongratulations,
	divAddMovieCongratulations,
} from "./addMovieCongratulation";
import {
	createEditMovieForm,
	divEditMovieContainer,
	inputEditTitle,
	inputEditRating,
	textareaOverview,
	inputEditRuntime,
	inputEditMovieUrl,
	inputEditReleaseDate,
	formEditMovieForm,
} from "./editMovie";
import { createDivSearchMovie } from "./components/searchMovies";
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
	headerContentContainer,
} from "./mainContent";
import { createMovieDetails } from "./components/movieDetails";
import {
	deleteMovie,
	globalMoviesList,
	updateMoviesState,
	updateMovie,
} from "./api";

const { body } = document;

const addMovieCard = () => {
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
	formAddMovieForm.addEventListener("submit", () => {
		divAddMovieCongratulations.style.visibility = "visible";
		divAddMovieCongratulations.style.opacity = 1;
		body.style.overflowY = "hidden";
		divContentContainer.style.opacity = 0.5;
	});
};

const editMovieCard = (movieItem) => {
	const event = new CustomEvent("showModal", {
		detail: movieItem,
	});

	document.dispatchEvent(event);
	let cardDataId;

	divMainMoviesCards.addEventListener("click", (e) => {
		if (e.target.classList.contains("text-modal__edit")) {
			cardDataId = e.target.closest("[data-id]").getAttribute("data-id");
			const modalEditOrDelete = e.target.parentNode;

			modalEditOrDelete.style.opacity = 0;
			modalEditOrDelete.style.visibility = "hidden";
			modalEditOrDelete.nextSibling.style.opacity = 1;
			modalEditOrDelete.nextSibling.style.visibility = "visible";
			divContentContainer.style.opacity = 0.5;
			body.style.overflowY = "hidden";
			divEditMovieContainer.style.opacity = 1;
			divEditMovieContainer.style.visibility = "visible";

			inputEditTitle.value = globalMoviesList[cardDataId].title;
			inputEditRating.value = globalMoviesList[cardDataId].vote_average;
			textareaOverview.value = globalMoviesList[cardDataId].overview;
			inputEditRuntime.value = globalMoviesList[cardDataId].runtime;
			inputEditMovieUrl.value = globalMoviesList[cardDataId].poster_path;
			inputEditReleaseDate.value = globalMoviesList[cardDataId].release_date;
		}
	});
	formEditMovieForm.addEventListener("submit", (e) => {
		e.preventDefault();
		divEditMovieContainer.style.opacity = 0;
		divEditMovieContainer.style.visibility = "hidden";
		divContentContainer.style.opacity = 1;
		body.style.overflowY = "auto";

		globalMoviesList[cardDataId].title = inputEditTitle.value;
		globalMoviesList[cardDataId].vote_average = +inputEditRating.value;
		globalMoviesList[cardDataId].overview = textareaOverview.value;
		globalMoviesList[cardDataId].runtime = +inputEditRuntime.value;
		globalMoviesList[cardDataId].poster_path = inputEditMovieUrl.value;
		globalMoviesList[cardDataId].release_date = inputEditReleaseDate.value;

		updateMovie(globalMoviesList[cardDataId]);

		const searchValue = new FormData(e.target).delete("button-movie__submit");
		updateMoviesState({ search: searchValue });
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

const deleteMovieCard = () => {
	let cardDataId;
	divMainMoviesCards.addEventListener("click", (e) => {
		if (e.target.classList.contains("text-modal__delete")) {
			cardDataId = e.target.parentNode
				.closest("[data-id]")
				.getAttribute("data-id");
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
			deleteMovie(cardDataId);
			divContentContainer.style.opacity = 1;
			body.style.overflowY = "auto";
			divContentMovieContainer.style.overflow = "auto";
			divDeleteMovieCongratulations.style.visibility = "hidden";
			divDeleteMovieCongratulations.style.opacity = 0;

			// divAddMovieCongratulations.style.visibility = "visible";
			// divAddMovieCongratulations.style.opacity = 1;
			// body.style.overflowY = "hidden";
			// divContentContainer.style.opacity = 0.5;
		}
	});
};

export const renderHeaderOrDetails = (container = undefined) => {
	const realContainer = container || headerContentContainer;
	const { pathname } = window.location;
	const movieDetailsRegex = /\/movie/i;
	realContainer.textContent = "";

	if (movieDetailsRegex.test(pathname)) {
		createMovieDetails(realContainer);
	} else {
		createDivSearchMovie(realContainer);
	}
};

const renderHomePage = () => {
	addMovieCard();
	editMovieCard();
	deleteMovieCard();
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
	renderHomePage();
	renderHeaderOrDetails();
};

initApp();
