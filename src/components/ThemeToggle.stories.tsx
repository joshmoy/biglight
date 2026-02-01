import type { Meta, StoryObj } from '@storybook/preact-vite';
import { ThemeProvider } from '../contexts';
import { ThemeToggle } from './ThemeToggle';
import type { ThemeToggleProps } from './ThemeToggle';

const meta = {
	title: 'Components/ThemeToggle',
	component: ThemeToggle,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<div className="p-4">
					<Story />
				</div>
			</ThemeProvider>
		),
	],
	tags: ['autodocs'],
	argTypes: {
		showLabel: {
			control: 'boolean',
			description: 'Show theme label',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
} satisfies Meta<ThemeToggleProps>;

export default meta;
type Story = StoryObj<ThemeToggleProps>;

export const Default: Story = {
	args: {
		showLabel: true,
	},
};

export const WithoutLabel: Story = {
	args: {
		showLabel: false,
	},
};
