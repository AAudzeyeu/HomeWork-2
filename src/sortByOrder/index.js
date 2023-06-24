import { updateMoviesState } from "../api";

export const sortAskFormHandler = () => {
	updateMoviesState({ sortOrder: "asc" });
};
export const sortDescFormHandler = () => {
	updateMoviesState({ sortOrder: "desc" });
};
