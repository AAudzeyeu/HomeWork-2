export const createMainContentContainer = () => {
	const divContentContainer = document.createElement("div");
	divContentContainer.classList.add("content-container");

	const divContentSearchMovie = document.createElement("div");
	divContentSearchMovie.classList.add("content-search__movie", "logo");
	divContentContainer.append(divContentSearchMovie);

	const paragraphLogoMain = document.createElement("p");
	paragraphLogoMain.classList.add("logo-main__text");
	paragraphLogoMain.textContent = "roulette";
	divContentSearchMovie.append(paragraphLogoMain);

	const spanBold = document.createElement("span");
	spanBold.classList.add("bold");
	spanBold.textContent = "netflix";
	paragraphLogoMain.prepend(spanBold);

	const buttonAddMovie = document.createElement("button");
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

	const formSearchMovie = document.createElement("form");
	formSearchMovie.id = "form-search__movie";
	divMainSearch.append(formSearchMovie);

	const inputMainSearchMovie = document.createElement("input");
	inputMainSearchMovie.id = "main-search__movie";
	inputMainSearchMovie.type = "text";
	inputMainSearchMovie.placeholder = "What do you want to watch?";
	inputMainSearchMovie.required = "true";
	inputMainSearchMovie.name = "search-movie";
	formSearchMovie.append(inputMainSearchMovie);

	const labelMainSearchMovie = document.createElement("label");
	labelMainSearchMovie.setAttribute("for", "search-movie");
	formSearchMovie.append(labelMainSearchMovie);

	const buttonSearchMovie = document.createElement("button");
	buttonSearchMovie.id = "button-search__movie";
	buttonSearchMovie.textContent = "Search";

	const divMovieInfo = document.createElement("div");
	divMovieInfo.id = "movie-info";
	divContentContainer.append(divMovieInfo);

	const divMovieInfoContainer = document.createElement("div");
	divMovieInfoContainer.id = "movie-info__container";
	divMovieInfo.append(divMovieInfoContainer);

	const figureCardInfo = document.createElement("figure");
	figureCardInfo.classList.add("figure-card__info");
	divMovieInfoContainer.append(figureCardInfo);

	const figcaptionTextInfo = document.createElement("figcaption");
	figcaptionTextInfo.classList.add("text-figcaption__info");
	figcaptionTextInfo.textContent = "netflixroulette";
	figureCardInfo.append(figcaptionTextInfo);

	const imgMovieInfo = document.createElement("img");
	imgMovieInfo.alt = "movies";
	imgMovieInfo.classList.add("img-movie__info");
	figureCardInfo.append(imgMovieInfo);

	const divMovieDescriptionInfo = document.createElement("div");
	divMovieDescriptionInfo.classList.add("movie-description__info");
	divMovieInfoContainer.append(divMovieDescriptionInfo);

	const divMagnifyingGlass = document.createElement("div");
	divMagnifyingGlass.classList.add("magnifying-glass");
	divMovieDescriptionInfo.append(divMagnifyingGlass);

	const divDescriptionInfoName = document.createElement("div");
	divDescriptionInfoName.classList.add("description-info__name");
	divMovieDescriptionInfo.append(divDescriptionInfoName);

	const paragraphHeaderDescription = document.createElement("p");
	paragraphHeaderDescription.classList.add("header-description__text");
	paragraphHeaderDescription.textContent = "pulp Fiction";
	divDescriptionInfoName.append(paragraphHeaderDescription);

	const paragraphRating = document.createElement("p");
	paragraphRating.classList.add("rating");
	paragraphRating.textContent = "8.9";
	divDescriptionInfoName.append(paragraphRating);

	const paragraphDescription = document.createElement("p");
	paragraphDescription.classList.add("description-text");
	paragraphDescription.textContent = "Action & Adventure";
	divMovieDescriptionInfo.append(paragraphDescription);

	const paragraphDescriptionDateTime = document.createElement("p");
	paragraphDescriptionDateTime.classList.add("description-date__time");
	divMovieDescriptionInfo.append(paragraphDescriptionDateTime);

	const spanDescriptionDate = document.createElement("span");
	spanDescriptionDate.classList.add("description-date");
	spanDescriptionDate.textContent = "1994";
	paragraphDescriptionDateTime.append(spanDescriptionDate);

	const spanDescriptionTi = document.createElement("span");
	spanDescriptionTi.classList.add("description-time");
	spanDescriptionTi.textContent = "2h 34min";
	paragraphDescriptionDateTime.append(spanDescriptionTi);

	const divDescriptionMovieContainer = document.createElement("div");
	divDescriptionMovieContainer.classList.add("description-movie__container");
	divMovieDescriptionInfo.append(divDescriptionMovieContainer);

	const paragraphDescriptionMovie = document.createElement("p");
	paragraphDescriptionMovie.classList.add("description-movie");
	paragraphDescriptionMovie.textContent =
		"a sd asdass dasdasdasd saas dasdsa dsad asd sad d sad sads asaasdsasdadsa asd sad asasd dsaddds SDa dd sad asd asdas asd sa as assad asd assda";
	divDescriptionMovieContainer.append(paragraphDescriptionMovie);

	const divClearBoth = document.createElement("div");
	divClearBoth.classList.add("both");
	divContentContainer.append(divClearBoth);
	console.log(divMovieDescriptionInfo);
};
