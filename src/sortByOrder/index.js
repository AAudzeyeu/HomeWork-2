import { updateMoviesState } from "../api";

export const sortAskFormHandler = () => {
	updateMoviesState({ sortOrder: "ask" });
};
export const sortDescFormHandler = () => {
	updateMoviesState({ sortOrder: "desc" });
};
