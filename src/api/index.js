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

export const defaultParams = {
	limit: 10,
	filter: undefined,
	search: undefined,
	sortBy: undefined,
	sortOrder: "desc",
};
const blockAllContent = document.createElement("div");
blockAllContent.classList.add("block-content");
const blockContent = (promise) => {
	const { body } = document;
	body.append(blockAllContent);
	body.style.overflowX = "hidden";
	body.style.overflowY = "hidden";
	return promise.finally(() => {
		blockAllContent.remove();
		body.style.overflowX = "hidden";
		body.style.overflowY = "auto";
	});
};

export const getMovies = (params) =>
	blockContent(
		fetch(`${baseUrl}${objToSearch(params || defaultParams)}`).then((data) =>
			data.json()
		)
	);

export const createMovie = (body) =>
	blockContent(
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
			})
	);

export const updateMovie = (body) =>
	blockContent(
		fetch(baseUrl, {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((data) => data.json())
	);
export const getMovie = (id) =>
	blockContent(fetch(`${baseUrl}/${id}`).then((data) => data.json()));

export const globalMoviesList = {};

export const updateMoviesState = (params) => {
	if (params) updateSearchParams(params);
	const currentParams = getSearchparams() || defaultParams;
	const moviesElements = [];

	return getMovies(currentParams).then((data) => {
		data.data.forEach((movie) => {
			globalMoviesList[movie.id] = movie;
			moviesElements.push(createMovieItem(movie));
			console.log(data);
		});

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

export const deleteMovie = (id) =>
	blockContent(
		fetch(`${baseUrl}/${id}`, {
			method: "DELETE",
		})
			.then((data) => {
				if (data.status > 299 || data.status < 200) throw new Error("Oh, oh");
				showSuccessful();
				updateMoviesState();
			})
			.catch(() => {
				showError();
			})
	);
