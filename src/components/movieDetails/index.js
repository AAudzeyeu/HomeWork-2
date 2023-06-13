import { searchToObject } from "../../utils/search";
import { getMovie } from "../../api";
import {
	paragraphHeaderDescription,
	paragraphRating,
	imgMovieInfo,
	spanDescriptionTime,
	spanDescriptionDate,
	paragraphDescription,
	paragraphDescriptionMovie,
	divMovieInfo,
} from "../../movieInfo";
import { parseDate, parseTime } from "../../utils/date";
import { divContentContainer } from "../../mainContent";
import { defaultPoster } from "../movies";
// import { makeSageImage } from "../../utils/";

export const createMovieDetails = () => {
	const { id } = searchToObject(window.location.search);
	getMovie(id).then((data) => {
		// divContentSearchMovie.style.visibility = "hidden";
		// divContentSearchMovie.style.opacity = 0;
		// divContentSearchMovie.style.position = "absolute";

		// divMovieInfo.style.visibility = "visible";
		// divMovieInfo.style.opacity = 1;
		// divMovieInfo.style.position = "relative";

		console.log(data);
		paragraphHeaderDescription.textContent = data.title;
		paragraphRating.textContent = data.vote_average;
		imgMovieInfo.src = defaultPoster;
		spanDescriptionTime.textContent = parseTime(data.runtime);
		spanDescriptionDate.textContent = parseDate(data.release_date).year;
		console.log(data.release_date);
		console.log(parseDate(data.release_date).year);
		paragraphDescription.textContent = data.genres.join(", ");
		paragraphDescriptionMovie.textContent = data.overview;
	});
	divContentContainer.prepend(divMovieInfo);
};
