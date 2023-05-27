export const createMoreButton = (container) => {
	const button = document.createElement("button");
	button.type = "button";
	button.id = "show-more";
	button.innerText = "Show more";

	button.addEventListener("click", () => {
		const url = new URL(window.location);
		console.log(url);
		url.searchParams.set("page", 2);
		window.history.pushState(null, "", url.toString());
		// window.location.search = "?hello";
	}); 

	container.append(button);
};
