export const createAddMovieForm = () => {
	const divAddMovieContainer = document.createElement("div");
	divAddMovieContainer.classList.add("add-movie__container");

	const divAddMovieMain = document.createElement("div");
	divAddMovieMain.classList.add("add-movie__main");
	divAddMovieContainer.append(divAddMovieMain);

	const divCloseModal = document.createElement("div");
	divCloseModal.classList.add("closeModal");
	divAddMovieMain.append(divCloseModal);

	const paragraphHeaderAddText = document.createElement("p");
	paragraphHeaderAddText.classList.add("header-add__text");
	paragraphHeaderAddText.textContent = "Add Movie";
	divAddMovieMain.append(paragraphHeaderAddText);

	const formAddMovieForm = document.createElement("form");
	formAddMovieForm.id = "add-movie__form";
	divAddMovieMain.append(formAddMovieForm);

	const divFormMovieContainerTitle = document.createElement("div");
	divFormMovieContainerTitle.classList.add("form-movie__container", "left");
	formAddMovieForm.append(divFormMovieContainerTitle);

	const labelAddTitle = document.createElement("label");
	labelAddTitle.setAttribute("for", "title");
	labelAddTitle.classList.add("label-add__movie");
	labelAddTitle.textContent = "Title";
	divFormMovieContainerTitle.append(labelAddTitle);

	const brIndentTitle = document.createElement("br");
	divFormMovieContainerTitle.append(brIndentTitle);

	const inputAddTitle = document.createElement("input");
	inputAddTitle.type = "text";
	inputAddTitle.name = "title";
	inputAddTitle.placeholder = "Name";
	inputAddTitle.classList.add("input-add__left");
	inputAddTitle.required = "true";
	divFormMovieContainerTitle.append(inputAddTitle);

	const divFormMovieContainerReleaseDate = document.createElement("div");
	divFormMovieContainerReleaseDate.classList.add(
		"form-movie__container",
		"right"
	);
	formAddMovieForm.append(divFormMovieContainerReleaseDate);

	const labelAddReleaseDate = document.createElement("label");
	labelAddReleaseDate.setAttribute("for", "date");
	labelAddReleaseDate.classList.add("label-add__movie");
	labelAddReleaseDate.textContent = "Release date";
	divFormMovieContainerReleaseDate.append(labelAddReleaseDate);

	const brIndentReleaseDate = document.createElement("br");
	divFormMovieContainerReleaseDate.append(brIndentReleaseDate);

	const inputAddReleaseDate = document.createElement("input");
	inputAddReleaseDate.type = "date";
	inputAddReleaseDate.name = "date";
	inputAddReleaseDate.placeholder = "Select Date";
	inputAddReleaseDate.classList.add("input-add__right");
	inputAddReleaseDate.required = "true";
	divFormMovieContainerReleaseDate.append(inputAddReleaseDate);

	const divFormMovieContainerMovieUrl = document.createElement("div");
	divFormMovieContainerMovieUrl.classList.add("form-movie__container", "left");
	formAddMovieForm.append(divFormMovieContainerMovieUrl);

	const labelAddMovieUrl = document.createElement("label");
	labelAddMovieUrl.setAttribute("for", "url");
	labelAddMovieUrl.classList.add("label-add__movie");
	labelAddMovieUrl.textContent = "Movie Url";
	divFormMovieContainerMovieUrl.append(labelAddMovieUrl);

	const brIndentMovieUrl = document.createElement("br");
	divFormMovieContainerMovieUrl.append(brIndentMovieUrl);

	const inputAddMovieUrl = document.createElement("input");
	inputAddMovieUrl.type = "text";
	inputAddMovieUrl.name = "url";
	inputAddMovieUrl.placeholder = "https://";
	inputAddMovieUrl.classList.add("input-add__left");
	inputAddMovieUrl.required = "true";
	divFormMovieContainerMovieUrl.append(inputAddMovieUrl);

	const divFormMovieContainerRating = document.createElement("div");
	divFormMovieContainerRating.classList.add("form-movie__container", "right");
	formAddMovieForm.append(divFormMovieContainerRating);

	const labelAddRating = document.createElement("label");
	labelAddRating.setAttribute("for", "rating");
	labelAddRating.classList.add("label-add__movie");
	labelAddRating.textContent = "Rating";
	divFormMovieContainerRating.append(labelAddRating);

	const brIndentRating = document.createElement("br");
	divFormMovieContainerRating.append(brIndentRating);

	const inputAddRating = document.createElement("input");
	inputAddRating.type = "text";
	inputAddRating.name = "rating";
	inputAddRating.placeholder = "7.8";
	inputAddRating.classList.add("input-add__right");
	inputAddRating.required = "true";
	divFormMovieContainerRating.append(inputAddRating);

	const divFormMovieContainerGenre = document.createElement("div");
	divFormMovieContainerGenre.classList.add("form-movie__container", "left");
	formAddMovieForm.append(divFormMovieContainerGenre);

	const labelAddGenre = document.createElement("label");
	labelAddGenre.setAttribute("for", "genre");
	labelAddGenre.classList.add("label-add__movie");
	labelAddGenre.textContent = "Genre";
	divFormMovieContainerGenre.append(labelAddGenre);

	const brIndentGenre = document.createElement("br");
	divFormMovieContainerGenre.append(brIndentGenre);

	const divSelect = document.createElement("div");
	divSelect.classList.add("select");
	divFormMovieContainerGenre.append(divSelect);

	const selectGenre = document.createElement("select");
	selectGenre.setAttribute("type", "text");
	selectGenre.setAttribute("name", "genre");
	selectGenre.classList.add("input-add__left");
	divSelect.append(selectGenre);

	const optionHorror = document.createElement("option");
	optionHorror.label = "Horror";
	selectGenre.append(optionHorror);

	const optionFantastic = document.createElement("option");
	optionFantastic.label = "Fantastic";
	selectGenre.append(optionFantastic);

	const optionDocumentary = document.createElement("option");
	optionDocumentary.label = "Documentary";
	selectGenre.append(optionDocumentary);

	const divFormMovieContainerRuntime = document.createElement("div");
	divFormMovieContainerRuntime.classList.add("form-movie__containe", "right");
	formAddMovieForm.append(divFormMovieContainerRuntime);

	const labelAddRuntime = document.createElement("label");
	labelAddRuntime.setAttribute("for", "runtime");
	labelAddRuntime.classList.add("label-add__movie");
	labelAddRuntime.textContent = "Runtime";
	divFormMovieContainerRuntime.append(labelAddRuntime);

	const brIndentRuntime = document.createElement("br");
	divFormMovieContainerRuntime.append(brIndentRuntime);

	const inputAddRuntime = document.createElement("input");
	inputAddRuntime.type = "text";
	inputAddRuntime.name = "runtime";
	inputAddRuntime.placeholder = "minutes";
	inputAddRuntime.classList.add("input-add__right");
	inputAddRuntime.required = "true";
	divFormMovieContainerRuntime.append(inputAddRuntime);

	const divFormMovieContainerOverview = document.createElement("div");
	divFormMovieContainerOverview.classList.add("form-movie__container", "left");
	formAddMovieForm.append(divFormMovieContainerOverview);

	const labelAddOverview = document.createElement("label");
	labelAddOverview.setAttribute("for", "overview");
	labelAddOverview.classList.add("label-add__movie");
	labelAddOverview.textContent = "Overview";
	divFormMovieContainerOverview.append(labelAddOverview);

	const brIndentOverview = document.createElement("br");
	divFormMovieContainerOverview.append(brIndentOverview);

	const textareaOverview = document.createElement("textarea");
	textareaOverview.setAttribute("type", "textarea");
	textareaOverview.setAttribute("name", "overview");
	textareaOverview.placeholder = "Movie description";
	textareaOverview.classList.add("input-add__big");
	divFormMovieContainerOverview.append(textareaOverview);

	const divFormMovieContainerSubmit = document.createElement("div");
	divFormMovieContainerSubmit.classList.add("form-movie__container", "right");
	formAddMovieForm.append(divFormMovieContainerSubmit);

	const inputAddSubmit = document.createElement("input");
	inputAddSubmit.type = "submit";
	inputAddSubmit.classList.add("button-movie__submit");
	inputAddSubmit.value = "Submit";
	divFormMovieContainerSubmit.append(inputAddSubmit);

	const divFormMovieContainerReset = document.createElement("div");
	divFormMovieContainerReset.classList.add("form-movie__container", "right");
	formAddMovieForm.append(divFormMovieContainerReset);

	const inputAddReset = document.createElement("input");
	inputAddReset.type = "reset";
	inputAddReset.classList.add("button-movie__reset");
	inputAddReset.value = "Reset";
	divFormMovieContainerReset.append(inputAddReset);

	const { body } = document;
	body.prepend(divAddMovieContainer);
};
