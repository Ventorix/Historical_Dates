import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import '../../src/app/styles/index.scss';

import { ErrorBoundaryDecorator } from '../../src/shared/config/storybook/ErrorBoundaryDecorator/ErrorBoundaryDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
	parameters: {
		layout: 'fullscreen',
		viewMode: 'canvas',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: { type: 'string' },
	},
	decorators: [
		StyleDecorator,
		ThemeDecorator(Theme.LIGHT),
		RouterDecorator,
		ErrorBoundaryDecorator,
	],
	tags: ['autodocs'],
};

export default preview;
