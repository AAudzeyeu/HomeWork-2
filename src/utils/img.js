import defaultPoster from "../../public/images/card-2.png";

export const makeSafeImage = (img) => {
	img.onerror = (e) => {
		e.target.src = defaultPoster;
	};
};
