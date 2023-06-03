import { defaultLimit, updateMoviesState } from "../../api";
import { getSearchparams } from "../../utils/search";

export const button = document.createElement("button");

export const createMoreButton = (container) => {
	button.type = "button";
	button.id = "show-more";
	button.innerText = "Show more";

	const onClick = () => {
		const currentLimit = getSearchparams().limit || defaultLimit;
		updateMoviesState({ limit: currentLimit + defaultLimit });
	};

	button.addEventListener("click", onClick);

	container.append(button);
};
