import { defaultPoster } from "../../public/images/card-4.png";

export const makeSageImage = (img) => {
	img.onerror = (e) => {
		e.target.src = defaultPoster;
	};
};
