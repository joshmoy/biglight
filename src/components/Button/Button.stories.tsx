import type { Meta, StoryObj } from '@storybook/preact-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';
import type { ButtonProps } from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary'],
			description: 'Button style variant',
		},
		size: {
			control: 'select',
			options: ['sm', 'md'],
			description: 'Button size',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		children: {
			control: 'text',
			description: 'Button content',
		},
		onClick: {
			action: 'clicked',
			description: 'Click handler',
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Primary Button',
	},
};

export const PrimarySmall: Story = {
	args: {
		variant: 'primary',
		size: 'sm',
		children: 'Small Primary',
	},
};

export const PrimaryDisabled: Story = {
	args: {
		variant: 'primary',
		children: 'Disabled Primary',
		disabled: true,
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Secondary Button',
	},
};

export const SecondarySmall: Story = {
	args: {
		variant: 'secondary',
		size: 'sm',
		children: 'Small Secondary',
	},
};

export const SecondaryDisabled: Story = {
	args: {
		variant: 'secondary',
		children: 'Disabled Secondary',
		disabled: true,
	},
};

export const Tertiary: Story = {
	args: {
		variant: 'tertiary',
		children: 'Tertiary Button',
	},
};

export const TertiarySmall: Story = {
	args: {
		variant: 'tertiary',
		size: 'sm',
		children: 'Small Tertiary',
	},
};

export const TertiaryDisabled: Story = {
	args: {
		variant: 'tertiary',
		children: 'Disabled Tertiary',
		disabled: true,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-8 p-8 bg-surface-page">
			<h2 className="text-heading font-semibold text-heading-h6">Buttons</h2>
			
			<div className="flex gap-10">
				<div className="flex flex-col gap-4 w-24">
					<div className="h-8" />
					<div className="flex items-center h-12">
						<span className="text-body text-body-md">Default</span>
					</div>
					<div className="flex items-center h-12">
						<span className="text-body text-body-md">Hovered</span>
					</div>
					<div className="flex items-center h-12">
						<span className="text-body text-body-md">Disabled</span>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-heading font-medium text-body-lg h-8 flex items-center">
						Primary
					</h3>
					<div className="flex flex-col gap-4">
						<div className="flex gap-4">
							<Button variant="primary">Button label</Button>
							<Button variant="primary" size="sm">Button label</Button>
						</div>
						<div className="flex gap-4">
							<Button variant="primary" className="hover:bg-action-hover-primary hover:text-action-onsecondary">Button label</Button>
							<Button variant="primary" size="sm" className="hover:bg-action-hover-primary hover:text-action-onsecondary">Button label</Button>
						</div>
						<div className="flex gap-4">
							<Button variant="primary" disabled>Button label</Button>
							<Button variant="primary" size="sm" disabled>Button label</Button>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-heading font-medium text-body-lg h-8 flex items-center">
						Secondary
					</h3>
					<div className="flex flex-col gap-4">
						<div className="flex gap-4">
							<Button variant="secondary">Button label</Button>
							<Button variant="secondary" size="sm">Button label</Button>
						</div>
						<div className="flex gap-4">
							<Button variant="secondary" className="hover:bg-action-hover-secondary hover:text-action-onprimary">Button label</Button>
							<Button variant="secondary" size="sm" className="hover:bg-action-hover-secondary hover:text-action-onprimary">Button label</Button>
						</div>
						<div className="flex gap-4">
							<Button variant="secondary" disabled>Button label</Button>
							<Button variant="secondary" size="sm" disabled>Button label</Button>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-heading font-medium text-body-lg h-8 flex items-center">
						Tertiary
					</h3>
					<div className="flex flex-col gap-4">
						<div className="flex gap-4">
							<Button variant="tertiary">Button label</Button>
							<Button variant="tertiary" size="sm">Button label</Button>
						</div>
						<div className="flex gap-4">
							<Button variant="tertiary" className="hover:bg-action-secondary hover:text-action-onsecondary">Button label</Button>
							<Button variant="tertiary" size="sm" className="hover:bg-action-secondary hover:text-action-onsecondary">Button label</Button>
						</div>
						<div className="flex gap-4">
							<Button variant="tertiary" disabled>Button label</Button>
							<Button variant="tertiary" size="sm" disabled>Button label</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	),
};
