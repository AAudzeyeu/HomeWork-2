import { getMovies } from "../api";

const container = document.querySelector(".main-movies__cards");
const template = document.querySelector("#movie-item");
const defaultPoster =
	"https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF894,1000_QL80_.jpg";
const background =
	"https://wallpapershome.ru/images/wallpapers/beguschiy-v-labirinte-lekarstvo-ot-smerti-1920x1080-beguschiy-v-labirinte-lekarstvo-ot-smerti-16947.jpg";

const createMovie = (movie) => {
	const movieElement = template.content.cloneNode(true);
	const backgroundLogo = document.querySelector(".content-search__movie");
	backgroundLogo.style.background = `url(${background})`;

	movieElement.querySelector("img").onerror = (e) => {
		e.target.src = defaultPoster;
	};
	movieElement.querySelector(".figcaption-name_movie").textContent =
		movie.title;

	movieElement.querySelector(".figcaption-smaller_movie").textContent =
		movie.genres.join(", ");

	movieElement.querySelector(".figcaption-date_movie").textContent = parseInt(
		movie.release_date,
		10
	);

	return movieElement;
};

export const createMovies = () => {
	getMovies().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);

		container.append(...moviesElements);
	});
};
