const defaultPoster =
	"https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF894,1000_QL80_.jpg";

export const makeSafeImage = (img) => {
	img.onerror = (e) => {
		e.target.src = defaultPoster;
	};
};
