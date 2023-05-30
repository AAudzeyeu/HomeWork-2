export const searchToObject = (searchString) => {
	const searchObject = {};
	const separateString = searchString.substring(1);
	const params = separateString.split("&");
	params.forEach((el) => {
		const [key, value] = el.split("=");
		const parseIntValue = parseInt(value, 10);
		searchObject[key] = parseIntValue || value;
	});
	return searchObject;
};

export const objToSearch = (params) => {
	let searchString = "";
	if (!params) return searchString;
	Object.entries(params).forEach(([key, value], index) => {
		if (value) {
			const symbol = !index ? "?" : "&";
			searchString += `${symbol}${key}=${value}`;
		}
	});
	return searchString;
};
export const getSearchparams = () => searchToObject(window.location.search);

export const updateSearchParams = (params) => {
	const url = new URL(window.location);

	if (params.filter) url.searchParams.set("filter", params.filter);
	if (params.limit) url.searchParams.set("limit", params.limit);
	if (params.search) url.searchParams.set("search", params.search);
	if (params.sortBy) url.searchParams.set("sortBy", params.sortBy);
	if (params.sortOrder) url.searchParams.set("sortOrder", params.sortOrder);

	window.history.pushState(null, "", url.toString());
};

// const updateNavigationField = () => {
// 	const url = new URL(window.location);
// 	console.log(url);
// 	url.searchParams.set("limit", 2);
// 	window.history.pushState(null, "", url.toString());
// };
