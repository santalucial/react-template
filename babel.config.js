const env = process.env.BABEL_ENV || process.env.NODE_ENV

let plugins = [
	'@babel/plugin-transform-runtime',
	['@babel/plugin-proposal-decorators', {legacy: true}],
	['@babel/plugin-proposal-class-properties', {loose: true}],
	'@babel/plugin-proposal-export-default-from',
	'@babel/plugin-proposal-object-rest-spread',
	'@babel/plugin-syntax-dynamic-import',
	'@babel/plugin-proposal-function-bind',
	'@babel/plugin-transform-async-to-generator',
	'react-html-attrs',
	[
		'babel-plugin-conditional-compile',
		{
			define: {
				// APP_VERSION: '1.0.0',
				TARGET: process.env.NODE_ENV, //'development',
			},
		},
	],
]

if (env === 'development') {
	plugins.push('react-hot-loader/babel')
}

if (env === 'production') {
	plugins = [
		...plugins,
		[
			'babel-plugin-transform-react-remove-prop-types',
			{removeImport: true},
		],
		[
			'babel-plugin-jsx-remove-data-test-id',
			{
				attributes: ['data-test-id', 'data-testid'],
			},
		],
		'@babel/plugin-transform-react-inline-elements',
		'@babel/plugin-transform-react-constant-elements',
	]
}

module.exports = {
	presets: [
		'@babel/preset-flow',
		'@babel/preset-react',
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['> 10%'],
				},
				modules: 'auto',
			},
		],
	],
	plugins,
}
