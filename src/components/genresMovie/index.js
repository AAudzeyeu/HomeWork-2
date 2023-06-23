import { updateMoviesState } from "../../api";

export const genreDocumentaryFormHandler = (e) => {
	e.preventDefault();
	updateMoviesState({ filter: "Documentary" });
};
export const genreComedyFormHandler = (e) => {
	e.preventDefault();
	updateMoviesState({ filter: "Comedy" });
};

export const genreHorrorFormHandler = (e) => {
	e.preventDefault();
	updateMoviesState({ filter: "Horror" });
};

export const genreCrimeFormHandler = (e) => {
	e.preventDefault();
	updateMoviesState({ filter: "Crime" });
};
