export const inputEditSubmit = document.createElement("input");
export const formEditMovieForm = document.createElement("form");
export const divEditMovieContainer = document.createElement("div");

export const inputEditTitle = document.createElement("input");
export const inputEditRating = document.createElement("input");
export const selectGenre = document.createElement("select");
export const textareaOverview = document.createElement("textarea");
export const inputEditRuntime = document.createElement("input");
export const inputEditMovieUrl = document.createElement("input");
export const inputEditReleaseDate = document.createElement("input");

export const createEditMovieForm = (container) => {
	divEditMovieContainer.classList.add("edit-movie__container");

	const divEditMovieMain = document.createElement("div");
	divEditMovieMain.classList.add("add-movie__main");
	divEditMovieContainer.append(divEditMovieMain);

	const divCloseModal = document.createElement("div");
	divCloseModal.classList.add("closeModal");
	divEditMovieMain.append(divCloseModal);

	const paragraphHeaderEditText = document.createElement("p");
	paragraphHeaderEditText.classList.add("header-add__text");
	paragraphHeaderEditText.textContent = "Edit Movie";
	divEditMovieMain.append(paragraphHeaderEditText);

	formEditMovieForm.id = "add-movie__form";
	divEditMovieMain.append(formEditMovieForm);

	const divFormMovieContainerTitle = document.createElement("div");
	divFormMovieContainerTitle.classList.add("form-movie__container", "left");
	formEditMovieForm.append(divFormMovieContainerTitle);

	const labelEditTitle = document.createElement("label");
	labelEditTitle.setAttribute("for", "title");
	labelEditTitle.classList.add("label-add__movie");
	labelEditTitle.textContent = "Title";
	divFormMovieContainerTitle.append(labelEditTitle);

	const brIndentTitle = document.createElement("br");
	divFormMovieContainerTitle.append(brIndentTitle);

	inputEditTitle.type = "text";
	inputEditTitle.name = "title";
	inputEditTitle.placeholder = "Name";
	inputEditTitle.classList.add("input-add__left");
	inputEditTitle.required = "true";
	divFormMovieContainerTitle.append(inputEditTitle);

	const divFormMovieContainerReleaseDate = document.createElement("div");
	divFormMovieContainerReleaseDate.classList.add(
		"form-movie__container",
		"right"
	);
	formEditMovieForm.append(divFormMovieContainerReleaseDate);

	const labelEditReleaseDate = document.createElement("label");
	labelEditReleaseDate.setAttribute("for", "date");
	labelEditReleaseDate.classList.add("label-add__movie");
	labelEditReleaseDate.textContent = "Release date";
	divFormMovieContainerReleaseDate.append(labelEditReleaseDate);

	const brIndentReleaseDate = document.createElement("br");
	divFormMovieContainerReleaseDate.append(brIndentReleaseDate);

	inputEditReleaseDate.type = "date";
	inputEditReleaseDate.name = "date";
	inputEditReleaseDate.placeholder = "Select Date";
	inputEditReleaseDate.classList.add("input-add__right");
	inputEditReleaseDate.required = "true";
	divFormMovieContainerReleaseDate.append(inputEditReleaseDate);

	const divFormMovieContainerMovieUrl = document.createElement("div");
	divFormMovieContainerMovieUrl.classList.add("form-movie__container", "left");
	formEditMovieForm.append(divFormMovieContainerMovieUrl);

	const labelEditMovieUrl = document.createElement("label");
	labelEditMovieUrl.setAttribute("for", "url");
	labelEditMovieUrl.classList.add("label-add__movie");
	labelEditMovieUrl.textContent = "Movie Url";
	divFormMovieContainerMovieUrl.append(labelEditMovieUrl);

	const brIndentMovieUrl = document.createElement("br");
	divFormMovieContainerMovieUrl.append(brIndentMovieUrl);

	inputEditMovieUrl.type = "text";
	inputEditMovieUrl.name = "url";
	inputEditMovieUrl.placeholder = "https://";
	inputEditMovieUrl.classList.add("input-add__left");
	inputEditMovieUrl.required = "true";
	divFormMovieContainerMovieUrl.append(inputEditMovieUrl);

	const divFormMovieContainerRating = document.createElement("div");
	divFormMovieContainerRating.classList.add("form-movie__container", "right");
	formEditMovieForm.append(divFormMovieContainerRating);

	const labelEditRating = document.createElement("label");
	labelEditRating.setAttribute("for", "rating");
	labelEditRating.classList.add("label-add__movie");
	labelEditRating.textContent = "Rating";
	divFormMovieContainerRating.append(labelEditRating);

	const brIndentRating = document.createElement("br");
	divFormMovieContainerRating.append(brIndentRating);

	inputEditRating.type = "text";
	inputEditRating.name = "rating";
	inputEditRating.placeholder = "7.8";
	inputEditRating.classList.add("input-add__right");
	inputEditRating.required = "true";
	divFormMovieContainerRating.append(inputEditRating);

	const divFormMovieContainerGenre = document.createElement("div");
	divFormMovieContainerGenre.classList.add("form-movie__container", "left");
	formEditMovieForm.append(divFormMovieContainerGenre);

	const labelEditGenre = document.createElement("label");
	labelEditGenre.setAttribute("for", "genre");
	labelEditGenre.classList.add("label-add__movie");
	labelEditGenre.textContent = "Genre";
	divFormMovieContainerGenre.append(labelEditGenre);

	const brIndentGenre = document.createElement("br");
	divFormMovieContainerGenre.append(brIndentGenre);

	const divSelect = document.createElement("div");
	divSelect.classList.add("select");
	divFormMovieContainerGenre.append(divSelect);

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
	formEditMovieForm.append(divFormMovieContainerRuntime);

	const labelEditRuntime = document.createElement("label");
	labelEditRuntime.setAttribute("for", "runtime");
	labelEditRuntime.classList.add("label-add__movie");
	labelEditRuntime.textContent = "Runtime";
	divFormMovieContainerRuntime.append(labelEditRuntime);

	const brIndentRuntime = document.createElement("br");
	divFormMovieContainerRuntime.append(brIndentRuntime);

	inputEditRuntime.type = "text";
	inputEditRuntime.name = "runtime";
	inputEditRuntime.placeholder = "minutes";
	inputEditRuntime.classList.add("input-add__right");
	inputEditRuntime.required = "true";
	divFormMovieContainerRuntime.append(inputEditRuntime);

	const divFormMovieContainerOverview = document.createElement("div");
	divFormMovieContainerOverview.classList.add("form-movie__container", "left");
	formEditMovieForm.append(divFormMovieContainerOverview);

	const labelEditOverview = document.createElement("label");
	labelEditOverview.setAttribute("for", "overview");
	labelEditOverview.classList.add("label-add__movie");
	labelEditOverview.textContent = "Overview";
	divFormMovieContainerOverview.append(labelEditOverview);

	const brIndentOverview = document.createElement("br");
	divFormMovieContainerOverview.append(brIndentOverview);

	textareaOverview.setAttribute("type", "textarea");
	textareaOverview.setAttribute("name", "overview");
	textareaOverview.placeholder = "Movie description";
	textareaOverview.classList.add("input-add__big");
	divFormMovieContainerOverview.append(textareaOverview);

	const divFormMovieContainerSubmit = document.createElement("div");
	divFormMovieContainerSubmit.classList.add("form-movie__container", "right");
	formEditMovieForm.append(divFormMovieContainerSubmit);

	inputEditSubmit.type = "submit";
	inputEditSubmit.classList.add("button-movie__submit");
	inputEditSubmit.value = "Submit";
	divFormMovieContainerSubmit.append(inputEditSubmit);

	const divFormMovieContainerReset = document.createElement("div");
	divFormMovieContainerReset.classList.add("form-movie__container", "right");
	formEditMovieForm.append(divFormMovieContainerReset);

	const inputEditReset = document.createElement("input");
	inputEditReset.type = "reset";
	inputEditReset.classList.add("button-movie__reset");
	inputEditReset.value = "Reset";
	divFormMovieContainerReset.append(inputEditReset);

	container.append(divEditMovieContainer);
};
