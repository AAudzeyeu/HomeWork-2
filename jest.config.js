module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleNameMapper: {
		"\\.(jpe?g|svg|png|s[ac]ss)$" : "<rootDir>/fileMock.js"
	}
};
