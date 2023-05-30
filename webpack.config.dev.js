const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");
const PATHS = require("./paths");

module.exports = merge(baseWebpackConfig, {
	mode: "development",
	devServer: {
		static: {
			directory: PATHS.PUBLIC,
		},
		port: 9000,
	},
});
