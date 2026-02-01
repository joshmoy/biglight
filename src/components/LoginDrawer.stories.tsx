import type { Meta, StoryObj } from '@storybook/preact-vite';
import { fn } from 'storybook/test';
import { LoginDrawer } from './LoginDrawer';
import type { LoginDrawerProps } from './LoginDrawer';

const meta = {
	title: 'Components/LoginDrawer',
	component: LoginDrawer,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['desktop', 'mobile'],
			description: 'Drawer size variant',
		},
		onClose: {
			action: 'close clicked',
			description: 'Close button handler',
		},
		onContinue: {
			action: 'continue clicked',
			description: 'Continue button handler',
		},
		onPasswordLogin: {
			action: 'password login clicked',
			description: 'Password login button handler',
		},
		onJoinClick: {
			action: 'join clicked',
			description: 'Join/Become a member button handler',
		},
	},
	args: {
		onClose: fn(),
		onContinue: fn(),
		onPasswordLogin: fn(),
		onJoinClick: fn(),
	},
} satisfies Meta<LoginDrawerProps>;

export default meta;
type Story = StoryObj<LoginDrawerProps>;

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

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-8 p-8 bg-surface-page">
			<h2 className="text-heading font-semibold text-heading-h6">
				Login Drawer - Magic Link
			</h2>

			<div className="flex flex-wrap gap-12">
				<div>
					<h3 className="text-heading font-medium text-body-lg mb-4">
						Desktop Variant
					</h3>
					<LoginDrawer size="desktop" />
				</div>

				<div>
					<h3 className="text-heading font-medium text-body-lg mb-4">
						Mobile Variant
					</h3>
					<LoginDrawer size="mobile" />
				</div>
			</div>
		</div>
	),
};

export const DesktopInContext: Story = {
	render: () => (
		<div className="min-h-screen bg-[color:var(--surface-color-overlay-background)] flex items-center justify-end p-8">
			<div className="bg-surface-page shadow-2xl">
				<LoginDrawer size="desktop" />
			</div>
		</div>
	),
};

export const MobileInContext: Story = {
	render: () => (
		<div className="min-h-screen bg-[color:var(--surface-color-overlay-background)] flex items-center justify-center p-4">
			<div className="bg-surface-page shadow-2xl">
				<LoginDrawer size="mobile" />
			</div>
		</div>
	),
};
