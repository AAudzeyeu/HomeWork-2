import { updateMoviesState } from "../../api";

export const genreDocumentaryFormHandler = () => {
	updateMoviesState({ filter: "Documentary" });
};
export const genreComedyFormHandler = () => {
	updateMoviesState({ filter: "Comedy" });
};

export const genreHorrorFormHandler = () => {
	updateMoviesState({ filter: "Horror" });
};

export const genreCrimeFormHandler = () => {
	updateMoviesState({ filter: "Crime" });
};

export const genreAllFormHandler = () => {
	updateMoviesState({ filter: "" });
};
