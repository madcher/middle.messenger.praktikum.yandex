// prettier-ignore
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	rules: {
		'arrow-parens': ['warn', 'as-needed'],
		'curly': ['warn', 'all'],
		'no-prototype-builtins': 'warn',
		'brace-style': 'warn',
		'no-duplicate-case': 'warn',
		'no-debugger': 'warn',
		'no-console': 'warn',
		'no-undef': 'off',
		'no-case-declarations': 'off',
		'linebreak-style': 'off',

		'react/jsx-key': 'warn',
		'react/display-name': 'warn',
		'react/no-children-prop': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',

		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-misused-promises': 'warn',
		'@typescript-eslint/no-floating-promises': 'warn',
		'@typescript-eslint/require-await': 'warn',
		'@typescript-eslint/restrict-plus-operands': 'warn',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		/** пока существует any в проекте - отключаем правила */
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',

	},
	overrides: [
		{
			/** не подключаем правила TS, где ещё не внедрён TS */
			files: ['*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/await-thenable': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-misused-promises': 'off',
				'@typescript-eslint/no-floating-promises': 'off',
				'@typescript-eslint/require-await': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/restrict-plus-operands': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
};
