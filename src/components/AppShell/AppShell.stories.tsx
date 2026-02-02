import type { Meta, StoryObj } from '@storybook/preact-vite';
import { AppShell } from './AppShell';
import type { AppShellProps } from './AppShell';

const meta = {
	title: 'Components/AppShell',
	component: AppShell,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['desktop', 'mobile'],
			description: 'Force a size (optional)',
		},
	},
} satisfies Meta<AppShellProps>;

export default meta;
type Story = StoryObj<AppShellProps>;

export const Default: Story = {};

export const Desktop: Story = {
	args: {
		size: 'desktop',
	},
};

export const Mobile: Story = {
	args: {
		size: 'mobile',
	},
};
