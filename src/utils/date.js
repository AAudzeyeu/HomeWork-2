export const parseDate = (data) => {
	const parsed = data.split("-");

	return {
		year: parsed[0],
		month: parsed[1],
		day: parsed[2],
	};
};

export const parseTime = (mins) => {
	const hours = Math.trunc(mins / 60);
	const minutes = mins % 60;
	return `${hours ? `${hours}h` : ""} ${minutes ? `${minutes}min` : ""}`;
};
