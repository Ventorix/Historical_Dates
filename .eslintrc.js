module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'plugin:jest-dom/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
				jest: true,
			},
			files: ['.eslintrc.{js,cjs}', 'src/**/*Slice.ts'],
			rules: { 'no-param-reassign': ['error', { props: false }] },
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'i18next', 'jest-dom', 'react-hooks'],
	rules: {
		'i18next/no-literal-string': 2,
		'react/react-in-jsx-scope': 0,
		'react/display-name': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
