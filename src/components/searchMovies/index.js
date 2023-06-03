import { updateMoviesState } from "../../api";

export const searchFormHandler = (e) => {
	e.preventDefault();
	const searchValue = new FormData(e.target).get("search-movie");

	updateMoviesState({ search: searchValue });
};
