import { defaultLimit, updateMoviesState } from "../../api";
import { getSearchparams } from "../../utils/search";
import { createMovie } from "../movies";
import { divMainMoviesCards } from "../../mainContent";

export const createMoreButton = (container) => {
	const button = document.createElement("button");
	button.type = "button";
	button.id = "show-more";
	button.innerText = "Show more";

	const onClick = () => {
		const currentLimit = getSearchparams().limit || defaultLimit;
		updateMoviesState({ limit: currentLimit + defaultLimit }).then((data) => {
			const movies = data.data;
			const moviesElements = movies.map(createMovie);

			divMainMoviesCards.append(...moviesElements);
		});
	};

	button.addEventListener("click", onClick);

	container.append(button);
};
