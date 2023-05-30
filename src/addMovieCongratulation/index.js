export const divAddMovieCongratulations = document.createElement("div");

export const createAddMovieCongratulations = () => {
	divAddMovieCongratulations.classList.add("add-movie__congratulations");

	const divCloseModalTwo = document.createElement("div");
	divCloseModalTwo.classList.add("closeModal");
	divAddMovieCongratulations.append(divCloseModalTwo);

	const divSuccessfullyContainer = document.createElement("div");
	divSuccessfullyContainer.classList.add("successfully-container");
	divAddMovieCongratulations.append(divSuccessfullyContainer);

	const divSuccessfully = document.createElement("div");
	divSuccessfully.classList.add("successfully");
	divSuccessfullyContainer.append(divSuccessfully);

	const heightHeaderCongratulations = document.createElement("h1");
	heightHeaderCongratulations.classList.add("header-text__congratulations");
	heightHeaderCongratulations.textContent = "congratulations !";
	divAddMovieCongratulations.append(heightHeaderCongratulations);

	const divTextCongratulationsContainer = document.createElement("div");
	divTextCongratulationsContainer.classList.add(
		"text-congratulations__container"
	);
	divAddMovieCongratulations.append(divTextCongratulationsContainer);

	const paragraphCongratulations = document.createElement("p");
	paragraphCongratulations.classList.add("text-congratulations");
	paragraphCongratulations.textContent =
		"The movie has been added to database successfully";
	divTextCongratulationsContainer.append(paragraphCongratulations);

	const { body } = document;
	body.append(divAddMovieCongratulations);
};
