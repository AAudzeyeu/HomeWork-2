import "./style.scss";

import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { createMovies } from "./components/movies";
import { createAddMovieForm, divAddMovieContainer } from "./addMovie";
import {
	createMainContentContainer,
	divMainMoviesCards,
	buttonContainer,
	buttonAddMovie,
	divContentContainer,
	divContentMovieContainer,
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
	buttonAddMovie.addEventListener("click", () => {
		divContentContainer.style.opacity = 0.5;
		body.style.overflowY = "hidden";
		divContentMovieContainer.style.overflow = "hidden";
		divAddMovieContainer.style.visibility = "visible";
	});
	divAddMovieContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("closeModal")) {
			divContentContainer.style.opacity = 1;
			body.style.overflowY = "auto";
			divContentMovieContainer.style.overflow = "auto";
			divAddMovieContainer.style.visibility = "hidden";
		}
	});
};

addMovie();
