import {
	getSearchparams,
	objToSearch,
	updateSearchParams,
} from "../utils/search";

import { createMovieItem } from "../components/movies";
import { button } from "../components/moreMoviesButton/createButton";

import { divMainMoviesCards, spanFoundFinished } from "../mainContent";

const baseUrl = "http://localhost:4000/movies";

export const defaultLimit = 10;

const defaultParams = {
	limit: 10,
	filter: undefined,
	search: undefined,
	sortBy: undefined,
	sortOrder: "desc",
};

export const getMovies = (params) =>
	fetch(`${baseUrl}${objToSearch(params || defaultParams)}`).then((data) =>
		data.json()
	);

export const createMovie = (body) =>
	fetch(baseUrl, {
		method: "POST",
		body,
	}).then((data) => data.json());

export const updateMovie = (body) =>
	fetch(baseUrl, {
		method: "PUT",
		body,
	}).then((data) => data.json());
export const getMovie = (id) =>
	fetch(`${baseUrl}/${id}`).then((data) => data.json());

export const deleteMovie = (id) =>
	fetch(`${baseUrl}/${id}`, {
		method: "DELETE",
	});

export const updateMoviesState = (params) => {
	if (params) updateSearchParams(params);
	const currentParams = getSearchparams() || defaultParams;
	return getMovies(currentParams).then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovieItem);

		divMainMoviesCards.innerHTML = "";
		divMainMoviesCards.append(...moviesElements);

		spanFoundFinished.textContent = data.totalAmount;

		if (data.totalAmount <= (currentParams.limit || defaultLimit)) {
			button.classList.add("hidden");
		} else {
			button.classList.remove("hidden");
		}
	});
};
