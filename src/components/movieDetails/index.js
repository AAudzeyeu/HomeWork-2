import { searchToObject } from "../../utils/search";
import { getMovie } from "../../api";

export const createMovieDetails = (container) => {
	const { id } = searchToObject(window.location.search);
	getMovie(id).then((data) => {
		container.textContent = data.title;
	});
};
