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
import { makeSafeImage } from "../../utils/img";

export const createMovieDetails = (container) => {
	const { id } = searchToObject(window.location.search);
	getMovie(id).then((data) => {
		paragraphHeaderDescription.textContent = data.title;
		paragraphRating.textContent = data.vote_average;
		imgMovieInfo.src = data.poster_path;
		makeSafeImage(imgMovieInfo);
		spanDescriptionTime.textContent = parseTime(data.runtime);
		spanDescriptionDate.textContent = parseDate(data.release_date).year;
		paragraphDescription.textContent = data.genres.join(", ");
		paragraphDescriptionMovie.textContent = data.overview;
	});
	container.prepend(divMovieInfo);
};
