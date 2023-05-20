export const parseDate = (data) => {
	const parsed = data.split(" ");
	return {
		year: parsed[0],
		month: parsed[1],
		day: parsed[2],
	};
};
