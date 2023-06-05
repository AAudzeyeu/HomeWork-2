export const divDeleteMovieCongratulations = document.createElement("div");

export const createDeleteMovieCongratulations = (container) => {
	divDeleteMovieCongratulations.classList.add("delete-movie__congratulations");

	const divCloseModalTwo = document.createElement("div");
	divCloseModalTwo.classList.add("closeModal");
	divDeleteMovieCongratulations.append(divCloseModalTwo);

	const divSuccessfullyContainer = document.createElement("div");
	divSuccessfullyContainer.classList.add("successfully-container");
	divDeleteMovieCongratulations.append(divSuccessfullyContainer);

	const heightHeaderCongratulations = document.createElement("h1");
	heightHeaderCongratulations.classList.add("header-text__congratulations");
	heightHeaderCongratulations.textContent = "Delete Movie";
	divDeleteMovieCongratulations.append(heightHeaderCongratulations);

	const divTextCongratulationsContainer = document.createElement("div");
	divTextCongratulationsContainer.classList.add(
		"text-congratulations__container"
	);
	divDeleteMovieCongratulations.append(divTextCongratulationsContainer);

	const paragraphCongratulations = document.createElement("p");
	paragraphCongratulations.classList.add("text-congratulations");
	paragraphCongratulations.textContent =
		"Are you sure you want to delete this movie?";
	divTextCongratulationsContainer.append(paragraphCongratulations);

	const buttonDeleteMovie = document.createElement("button");
	buttonDeleteMovie.classList.add("button-delete__movie");
	buttonDeleteMovie.textContent = "Confirm";
	divDeleteMovieCongratulations.append(buttonDeleteMovie);

	container.append(divDeleteMovieCongratulations);
};
