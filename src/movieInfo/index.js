export const divMovieInfo = document.createElement("div");
export const imgMovieInfo = document.createElement("img");

export const paragraphHeaderDescription = document.createElement("p");
export const paragraphRating = document.createElement("p");
export const paragraphDescription = document.createElement("p");
export const paragraphDescriptionMovie = document.createElement("p");
export const spanDescriptionTime = document.createElement("span");
export const spanDescriptionDate = document.createElement("span");

export const createMovieInfo = () => {
	divMovieInfo.id = "movie-info";

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

	paragraphHeaderDescription.classList.add("header-description__text");
	paragraphHeaderDescription.textContent = "pulp Fiction";
	divDescriptionInfoName.append(paragraphHeaderDescription);

	paragraphRating.classList.add("rating");
	paragraphRating.textContent = "8.9";
	divDescriptionInfoName.append(paragraphRating);

	paragraphDescription.classList.add("description-text");
	paragraphDescription.textContent = "Action & Adventure";
	divMovieDescriptionInfo.append(paragraphDescription);

	const paragraphDescriptionDateTime = document.createElement("p");
	paragraphDescriptionDateTime.classList.add("description-date__time");
	divMovieDescriptionInfo.append(paragraphDescriptionDateTime);

	spanDescriptionDate.classList.add("description-date");
	spanDescriptionDate.textContent = "1994";
	paragraphDescriptionDateTime.append(spanDescriptionDate);

	spanDescriptionTime.classList.add("description-time");
	spanDescriptionTime.textContent = "2h 34min";
	paragraphDescriptionDateTime.append(spanDescriptionTime);

	const divDescriptionMovieContainer = document.createElement("div");
	divDescriptionMovieContainer.classList.add("description-movie__container");
	divMovieDescriptionInfo.append(divDescriptionMovieContainer);

	paragraphDescriptionMovie.classList.add("description-movie");
	paragraphDescriptionMovie.textContent =
		"a sd asdass dasdasdasd saas dasdsa dsad asd sad d sad sads asaasdsasdadsa asd sad asasd dsaddds SDa dd sad asd asdas asd sa as assad asd assda";
	divDescriptionMovieContainer.append(paragraphDescriptionMovie);
};
