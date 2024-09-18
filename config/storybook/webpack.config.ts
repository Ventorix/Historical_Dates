import path from 'path';
import webpack from 'webpack';
import buildCssLoader from '../build/loaders/buildCssLoader';
import buildSVGLoader from '../build/loaders/buildSVGLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');

	config.module!.rules = config.module!.rules?.map((rule) => {
		//@ts-expect-error High complexity type
		if (rule && typeof rule !== 'string' && /svg/.test(rule.test)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config.module?.rules?.push(buildSVGLoader());
	config.module?.rules?.push(buildCssLoader(true));

	return config;
};
