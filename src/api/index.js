import {
	getSearchparams,
	objToSearch,
	updateSearchParams,
} from "../utils/search";

import {
	createMovieItem,
	showSuccessful,
	showError,
} from "../components/movies";
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
	})
		.then((data) => data.json())
		.then((data) => {
			if (data.status > 299 || data.status < 200) throw new Error("Oh, oh");
			showSuccessful();
		})
		.catch(() => {
			showError();
		});

export const updateMovie = (body) =>
	fetch(baseUrl, {
		method: "PUT",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((data) => data.json());
export const getMovie = (id) =>
	fetch(`${baseUrl}/${id}`).then((data) => data.json());

export const deleteMovie = (id) =>
	fetch(`${baseUrl}/${id}`, {
		method: "DELETE",
	})
		.then((data) => {
			if (data.status > 299 || data.status < 200) throw new Error("Oh, oh");
			showSuccessful();
		})
		.catch(() => {
			showError();
		});

export const globalMoviesList = {};

export const updateMoviesState = (params) => {
	if (params) updateSearchParams(params);
	const currentParams = getSearchparams() || defaultParams;
	return getMovies(currentParams).then((data) => {
		data.data.forEach((movie) => {
			globalMoviesList[movie.id] = movie;
			// console.log(globalMoviesList[movie.id]);
		});
		// globalMoviesList = data.data;
		const moviesElements = Object.values(globalMoviesList).map(createMovieItem);

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
