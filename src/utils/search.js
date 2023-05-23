export const searchToObject = (searchString) => {
	const searchObject = {};
	const separateString = searchString.substring(1);
	const params = separateString.split("&");
	params.forEach((el) => {
		const [key, value] = el.split("=");
		searchObject[key] = value;
	});
	return searchObject;
};

export const objToSearch = (obj) => "?page=2";

export const updateSearchParams = (params) => {
	const url = new URL(window.location);
	if (params.filter) URL.searchParams.set("filter", params.filter);
	if (params.search) URL.searchParams.set("search", params.search);
	if (params.sortBy) URL.searchParams.set("sortBy", params.sortBy);
	if (params.sortBy) URL.searchParams.set("sortBy", params.sortBy);
	window.history.pushState(null, "", url.toString());
};
