import { updateMoviesState } from "../../api";

export const sortTitleFormHandler = () => {
	updateMoviesState({ sortBy: "title" });
};
export const sortGenreFormHandler = () => {
	updateMoviesState({ sortBy: "genres" });
};
