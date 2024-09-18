import webpack from 'webpack';
import buildCssLoader from './loaders/buildCssLoader';
import buildSVGLoader from './loaders/buildSVGLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = buildSVGLoader();

	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							nsSeparator: '~',
							locales: ['ru', 'en'],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const styleLoader = buildCssLoader(isDev);

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [svgLoader, fileLoader, babelLoader, typescriptLoader, styleLoader];
}
