/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	rootDir: "src",
	coverageDirectory: "coverage",
	collectCoverageFrom: [
		"**/*.{ts,tsx}",
		"!**/*.d.ts",
		"!**/node_modules/**",
		"!**/vendor/**",
	],
	moduleDirectories: ["node_modules", "src"],
	setupFilesAfterEnv: ["../jest.setup.ts"],
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json",
		},
	},
};
