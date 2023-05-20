import { createMovies } from "./components/movies";
import "./style.css";

// const addMovie = () => {
// 	const button = document.querySelector(".button-add__movie");
// 	const container = document.querySelector(".content-container");
// 	const body = document.querySelector("body");
// 	const addMovieContainer = document.querySelector(".add-movie__container");

// 	button.addEventListener("click", () => {
// 		container.style.opacity = 0.5;
// 		body.style.overflowY = "hidden";
// 		addMovieContainer.style.display = "block";
// 	});
// 	addMovieContainer.addEventListener("click", (e) => {
// 		if (e.target.classList.contains("closeModal")) {
// 			container.style.opacity = 1;
// 			body.style.overflowY = "auto";
// 			addMovieContainer.style.display = "none";
// 		}
// 	});
// };

// addMovie();

const initApp = () => {
	createMovies();
};

initApp();
