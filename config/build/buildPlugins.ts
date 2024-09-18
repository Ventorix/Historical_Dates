import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({ template: paths.html, favicon: './src/ui/assets/icons/favicon.ico' }),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS__DEV__: JSON.stringify(isDev),
		}),
	];

	if (isDev) {
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
		);
	}

	if (!isDev) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
		);
	}

	return plugins;
}
