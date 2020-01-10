module.exports = {
	verbose: true,
	globals: {
		DEBUG: false,
	},
	modulePaths: ['<rootDir>/lib/'],
	//modulePathIgnorePatterns: ['/setup/'],
	//setupFiles: ['<rootDir>/tests/setup/globalSetup.hook.js'],
	setupFilesAfterEnv: ['jest-extended', 'jest-chain'],
	//testEnvironment: '<rootDir>/tests/setup/environment.js',
	collectCoverage: false,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['lib/**/*.js', '!**/node_modules/**'],
	transform: {
		'^.+\\.jsx?$': '<rootDir>/tests/setup/transformer-wrapper.js',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
	},
	transformIgnorePatterns: ['node_modules/(?!(@j2inn|antd.*styl))'],
}
