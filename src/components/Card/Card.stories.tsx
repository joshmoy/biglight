import type { Meta, StoryObj } from '@storybook/preact-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';
import type { CardProps } from './Card';

const meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['desktop', 'mobile'],
			description: 'Card size variant',
		},
		title: {
			control: 'text',
			description: 'Card title text',
		},
		buttonText: {
			control: 'text',
			description: 'Button label text',
		},
		onButtonClick: {
			action: 'button clicked',
			description: 'Button click handler',
		},
	},
	args: {
		onButtonClick: fn(),
	},
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const Desktop: Story = {
	args: {
		size: 'desktop',
		title: 'Join the family.',
		buttonText: 'Join',
	},
};

export const Mobile: Story = {
	args: {
		size: 'mobile',
		title: 'Join the family.',
		buttonText: 'Join',
	},
};

export const CustomTitle: Story = {
	args: {
		size: 'desktop',
		title: 'Join our community.',
		buttonText: 'Sign Up',
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-8 p-8 bg-surface-page">
			<h2 className="text-heading font-semibold text-heading-h6">
				Promotional Cards
			</h2>

			<div className="flex flex-col gap-6">
				<div>
					<h3 className="text-heading font-medium text-body-lg mb-4">
						Desktop Variant
					</h3>
					<Card size="desktop" title="Join the family." buttonText="Join" />
				</div>

				<div>
					<h3 className="text-heading font-medium text-body-lg mb-4">
						Mobile Variant
					</h3>
					<Card size="mobile" title="Join the family." buttonText="Join" />
				</div>

				<div>
					<h3 className="text-heading font-medium text-body-lg mb-4">
						Custom Content
					</h3>
					<div className="flex flex-wrap gap-6">
						<Card
							size="desktop"
							title="Get started today."
							buttonText="Sign Up"
						/>
						<Card
							size="mobile"
							title="Join us now."
							buttonText="Register"
						/>
					</div>
				</div>
			</div>
		</div>
	),
};
