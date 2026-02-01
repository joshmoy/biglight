import type { Preview } from '@storybook/preact-vite';
import { ThemeProvider } from '../src/contexts';
import '../src/style.css';

const preview: Preview = {
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			test: 'todo',
		},
	},
};

export default preview;
