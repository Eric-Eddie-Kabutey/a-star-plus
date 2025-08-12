module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	rules: {
		// Customize rules here
		'import/order': [
			'warn',
			{
				groups: [
					['builtin', 'external'],
					'internal',
					['parent', 'sibling', 'index'],
				],
				'newlines-between': 'always',
			},
		],
		'import/no-unresolved': 'error',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-explicit-any': 'off',
	},
	ignorePatterns: ['dist', 'node_modules'],
}
