import { searchToObject } from "../../utils/search";
import { getMovie } from "../../api";
import { divContentSearchMovie } from "../../mainContent";
import {
	divMovieInfo,
	paragraphHeaderDescription,
	paragraphRating,
	imgMovieInfo,
	spanDescriptionTime,
	spanDescriptionDate,
	paragraphDescription,
	paragraphDescriptionMovie,
} from "../../movieInfo";
import { defaultPoster } from "../movies";

export const createMovieDetails = () => {
	const { id } = searchToObject(window.location.search);
	getMovie(id).then((data) => {
		divContentSearchMovie.style.visibility = "hidden";
		divContentSearchMovie.style.opacity = 0;
		divContentSearchMovie.style.position = "absolute";

		divMovieInfo.style.visibility = "visible";
		divMovieInfo.style.opacity = 1;
		divMovieInfo.style.position = "relative";

		paragraphHeaderDescription.textContent = data.title;
		paragraphRating.textContent = data.vote_average;
		imgMovieInfo.src = defaultPoster;
		spanDescriptionTime.textContent = `${data.runtime} minute`;
		spanDescriptionDate.textContent = parseInt(data.release_date, 10);
		paragraphDescription.textContent = data.genres.join(", ");
		paragraphDescriptionMovie.textContent = data.overview;
	});
};
