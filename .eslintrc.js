module.exports = {
	globals: {
		MyGlobal: true,
	},
	parser: "@typescript-eslint/parser",
	extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	plugins: ["jsx-a11y"],
	rules: {
		"react/jsx-closing-bracket-location": "warn",
		"react/jsx-closing-tag-location": "warn",
		"react/no-multi-comp": "warn",
		"react/prefer-stateless-function": "warn",
		"jsx-quotes": "warn",
		"react/jsx-pascal-case": "error",
		"react/jsx-tag-spacing": "warn",
		"react/jsx-curly-spacing": "warn",
		"react/jsx-boolean-value": "warn",
		"jsx-a11y/alt-text": "warn",
		"jsx-a11y/img-redundant-alt": "warn",
		"jsx-a11y/aria-role": "warn",
		"jsx-a11y/no-access-key": "warn",
		"react/no-string-refs": "warn",
		"react/jsx-wrap-multilines": "warn",
		"react/self-closing-comp": "warn",
		"react/no-array-index-key": "warn",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
	},
	env: {
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			legacyDecorators: true,
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
