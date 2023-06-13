import { updateMoviesState } from "../../api";
import { divContentSearchMovie } from "../../mainContent";

export const searchFormHandler = (e) => {
	e.preventDefault();
	const searchValue = new FormData(e.target).get("search-movie");

	updateMoviesState({ search: searchValue });
};

export const createDivSearchMovie = (container) => {
	container.prepend(divContentSearchMovie);
};
