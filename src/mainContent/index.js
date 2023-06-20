import { searchFormHandler } from "../components/searchMovies";

import {
	genreDocumentaryFormHandler,
	genreHorrorFormHandler,
	genreComedyFormHandler,
	genreCrimeFormHandler,
} from "../components/genresMovie";
import {
	sortTitleFormHandler,
	sortGenreFormHandler,
} from "../components/sortMovie";
import { sortAskFormHandler, sortDescFormHandler } from "../sortByOrder";
import { goToClosedMovieGenre } from "../utils/search";

// import { genreFormHandler } from "../components/genresMovie";

export const divTemplate = document.createElement("div");
export const divMainMoviesCards = document.createElement("div");
export const divContentSearchMovie = document.createElement("div");
export const divContentMovieContainer = document.createElement("div");
export const buttonContainer = document.createElement("div");
export const buttonAddMovie = document.createElement("button");
export const divContentContainer = document.createElement("div");
export const buttonSearchMovie = document.createElement("button");
export const inputMainSearchMovie = document.createElement("input");
export const formSearchMovie = document.createElement("form");
export const spanFoundFinished = document.createElement("span");
export const paragraphModalEdit = document.createElement("p");
export const modalEditOrDelete = document.createElement("div");
export const headerContentContainer = document.createElement("header");

export const createMainContentContainer = (container) => {
	divContentContainer.classList.add("content-container");

	divContentSearchMovie.classList.add("content-search__movie", "logo");

	divContentContainer.append(headerContentContainer);

	const paragraphLogoMain = document.createElement("p");
	paragraphLogoMain.classList.add("logo-main__text");
	paragraphLogoMain.textContent = "roulette";
	divContentSearchMovie.append(paragraphLogoMain);

	const spanBold = document.createElement("span");
	spanBold.classList.add("bold");
	spanBold.textContent = "netflix";
	paragraphLogoMain.prepend(spanBold);

	buttonAddMovie.classList.add("button-add__movie");
	buttonAddMovie.textContent = "+add movie";
	divContentSearchMovie.append(buttonAddMovie);

	const divMainSearch = document.createElement("div");
	divMainSearch.classList.add("main-search");
	divContentSearchMovie.append(divMainSearch);

	const heightHeaderLogoText = document.createElement("h1");
	heightHeaderLogoText.classList.add("header-logo__text");
	heightHeaderLogoText.textContent = "Find your Movie";
	divMainSearch.append(heightHeaderLogoText);

	formSearchMovie.id = "form-search__movie";
	divMainSearch.append(formSearchMovie);

	inputMainSearchMovie.id = "main-search__movie";
	inputMainSearchMovie.type = "text";
	inputMainSearchMovie.placeholder = "What do you want to watch?";
	inputMainSearchMovie.required = "true";
	inputMainSearchMovie.name = "search-movie";
	formSearchMovie.append(inputMainSearchMovie);

	const labelMainSearchMovie = document.createElement("label");
	labelMainSearchMovie.setAttribute("for", "search-movie");
	formSearchMovie.append(labelMainSearchMovie);

	buttonSearchMovie.id = "button-search__movie";
	buttonSearchMovie.textContent = "Search";
	buttonSearchMovie.type = "submit";

	formSearchMovie.addEventListener("submit", searchFormHandler);
	formSearchMovie.append(buttonSearchMovie);

	const divClearBoth = document.createElement("div");
	divClearBoth.classList.add("both");
	divContentContainer.append(divClearBoth);

	divContentMovieContainer.classList.add("content-movie__container");
	divContentContainer.append(divContentMovieContainer);

	const divNavbarMovieBorder = document.createElement("div");
	divNavbarMovieBorder.classList.add("navbar-movie__border");
	divContentMovieContainer.append(divNavbarMovieBorder);

	const divNavbarMovieContainer = document.createElement("div");
	divNavbarMovieContainer.classList.add("navbar-movie__container");
	divNavbarMovieBorder.append(divNavbarMovieContainer);

	const navbarSearchMovie = document.createElement("nav");
	navbarSearchMovie.classList.add("navbar-search__movie");
	divNavbarMovieContainer.append(navbarSearchMovie);

	const buttonTypeAll = document.createElement("button");

	buttonTypeAll.addEventListener("click", goToClosedMovieGenre);
	buttonTypeAll.classList.add("button-type__movie");
	navbarSearchMovie.append(buttonTypeAll);

	const spanNavbarAll = document.createElement("span");
	spanNavbarAll.classList.add("navbar-movie__text");
	spanNavbarAll.textContent = "All";
	buttonTypeAll.append(spanNavbarAll);

	const buttonTypeDocumentary = document.createElement("button");
	buttonTypeDocumentary.addEventListener("click", genreDocumentaryFormHandler);
	buttonTypeDocumentary.classList.add("button-type__movie");
	navbarSearchMovie.append(buttonTypeDocumentary);

	const spanNavbarDocumentary = document.createElement("span");
	spanNavbarDocumentary.classList.add("navbar-movie__text");
	spanNavbarDocumentary.textContent = "Documentary";
	buttonTypeDocumentary.append(spanNavbarDocumentary);

	const buttonTypeComedy = document.createElement("button");
	buttonTypeComedy.addEventListener("click", genreComedyFormHandler);
	buttonTypeComedy.classList.add("button-type__movie");
	navbarSearchMovie.append(buttonTypeComedy);

	const spanNavbarComedy = document.createElement("span");
	spanNavbarComedy.classList.add("navbar-movie__text");
	spanNavbarComedy.textContent = "Comedy";
	buttonTypeComedy.append(spanNavbarComedy);

	const buttonTypeHorror = document.createElement("button");
	buttonTypeHorror.addEventListener("click", genreHorrorFormHandler);
	buttonTypeHorror.classList.add("button-type__movie");
	navbarSearchMovie.append(buttonTypeHorror);

	const spanNavbarHorror = document.createElement("span");
	spanNavbarHorror.classList.add("navbar-movie__text");
	spanNavbarHorror.textContent = "Horror";
	buttonTypeHorror.append(spanNavbarHorror);

	const buttonTypeCrime = document.createElement("button");
	buttonTypeCrime.addEventListener("click", genreCrimeFormHandler);
	buttonTypeCrime.classList.add("button-type__movie");
	navbarSearchMovie.append(buttonTypeCrime);

	const spanNavbarCrime = document.createElement("span");
	spanNavbarCrime.classList.add("navbar-movie__text");
	spanNavbarCrime.textContent = "Crime";
	buttonTypeCrime.append(spanNavbarCrime);

	const navbarSortMovie = document.createElement("nav");
	navbarSortMovie.classList.add("navbar-sort__movie");
	divNavbarMovieContainer.append(navbarSortMovie);

	const paragraphNavbarSort = document.createElement("p");
	paragraphNavbarSort.classList.add("navbar-sort__text");
	paragraphNavbarSort.textContent = "Sort by";
	navbarSortMovie.append(paragraphNavbarSort);

	const buttonTypeMovie = document.createElement("button");
	buttonTypeMovie.classList.add("button-type__movie");
	navbarSortMovie.append(buttonTypeMovie);

	const spanNavbarMovie = document.createElement("span");
	spanNavbarMovie.classList.add("navbar-movie__text");
	spanNavbarMovie.textContent = "Release Date";
	buttonTypeMovie.append(spanNavbarMovie);

	const divArrowFour = document.createElement("div");
	divArrowFour.classList.add("arrow-4");
	spanNavbarMovie.append(divArrowFour);

	const spanArrowFourLeft = document.createElement("span");
	spanArrowFourLeft.classList.add("arrow-4-left");
	divArrowFour.append(spanArrowFourLeft);

	const spanArrowFourRight = document.createElement("span");
	spanArrowFourRight.classList.add("arrow-4-right");
	divArrowFour.append(spanArrowFourRight);

	const modalSortMovie = document.createElement("div");
	buttonTypeMovie.addEventListener("click", () => {
		modalSortMovie.classList.toggle("navbar-sort__closed");
	});
	modalSortMovie.classList.add("modal-sort__movie", "navbar-sort__closed");
	navbarSortMovie.append(modalSortMovie);

	const paragraphModalTitle = document.createElement("p");
	paragraphModalTitle.addEventListener("click", sortTitleFormHandler);
	paragraphModalTitle.classList.add("text-sort__movie");
	paragraphModalTitle.textContent = "Title";
	modalSortMovie.append(paragraphModalTitle);

	const paragraphModalGenre = document.createElement("p");
	paragraphModalGenre.addEventListener("click", sortGenreFormHandler);
	paragraphModalGenre.classList.add("text-sort__movie");
	paragraphModalGenre.textContent = "Genre";
	modalSortMovie.append(paragraphModalGenre);

	const paragraphModalAsk = document.createElement("p");
	paragraphModalAsk.addEventListener("click", sortAskFormHandler);
	paragraphModalAsk.classList.add("text-sort__movie");
	paragraphModalAsk.textContent = "Ask";
	modalSortMovie.append(paragraphModalAsk);

	const paragraphModalDesc = document.createElement("p");
	paragraphModalDesc.addEventListener("click", sortDescFormHandler);
	paragraphModalDesc.classList.add("text-sort__movie");
	paragraphModalDesc.textContent = "Desc";
	modalSortMovie.append(paragraphModalDesc);

	const divMovieFound = document.createElement("div");
	divMovieFound.classList.add("movies-found");
	divContentMovieContainer.append(divMovieFound);

	const paragraphMoviesFound = document.createElement("p");
	paragraphMoviesFound.classList.add("movies-found__text");
	paragraphMoviesFound.textContent = " movies found";
	divMovieFound.append(paragraphMoviesFound);

	spanFoundFinished.classList.add("found-text__finished", "bold");
	paragraphMoviesFound.prepend(spanFoundFinished);

	divMainMoviesCards.addEventListener("click", (e) => {
		if (e.target.classList.contains("card-picture")) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}
	});
	divMainMoviesCards.classList.add("main-movies__cards");
	divContentMovieContainer.append(divMainMoviesCards);

	divTemplate.id = "movie-item";

	const figureMovieCard = document.createElement("figure");
	figureMovieCard.classList.add("movie-card");
	divTemplate.append(figureMovieCard);

	const imgCardPicture = document.createElement("img");
	imgCardPicture.classList.add("card-picture");
	imgCardPicture.alt = "movies";
	figureMovieCard.append(imgCardPicture);

	modalEditOrDelete.classList.add("delete-edit__movie");
	figureMovieCard.append(modalEditOrDelete);

	const divCloseModal = document.createElement("div");
	divCloseModal.classList.add("closeModal");
	modalEditOrDelete.append(divCloseModal);

	paragraphModalEdit.classList.add("text-modal__edit");
	paragraphModalEdit.textContent = "Edit";
	modalEditOrDelete.append(paragraphModalEdit);

	const paragraphModalDelete = document.createElement("p");
	paragraphModalDelete.classList.add("text-modal__delete");
	paragraphModalDelete.textContent = "Delete";
	modalEditOrDelete.append(paragraphModalDelete);

	const buttonMovieCard = document.createElement("button");
	buttonMovieCard.classList.add("button-movie__card");

	figureMovieCard.append(buttonMovieCard);

	const figcaptionMargin = document.createElement("figcaption");
	figcaptionMargin.classList.add("figcaption-margin");
	figureMovieCard.append(figcaptionMargin);

	const spanFigcaptionNameMovie = document.createElement("span");
	spanFigcaptionNameMovie.classList.add("figcaption-name_movie");
	figcaptionMargin.append(spanFigcaptionNameMovie);

	const spanFigcaptionDateMovie = document.createElement("span");
	spanFigcaptionDateMovie.classList.add("figcaption-date_movie");
	figcaptionMargin.append(spanFigcaptionDateMovie);

	const figcaptionSmallerMovie = document.createElement("figcaption");
	figcaptionSmallerMovie.classList.add(
		"figcaption-smaller_movie",
		"figcaption-margin"
	);
	figureMovieCard.append(figcaptionSmallerMovie);

	buttonContainer.classList.add("button-container");
	divContentMovieContainer.append(buttonContainer);

	container.append(divContentContainer);
};
