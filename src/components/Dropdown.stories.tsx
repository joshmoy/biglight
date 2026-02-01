import type { Meta, StoryObj } from '@storybook/preact-vite';
import { fn } from 'storybook/test';
import { Dropdown } from './Dropdown';
import type { DropdownProps } from './Dropdown';
import { useState } from 'preact/hooks';

const meta = {
	title: 'Components/Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label text for the dropdown',
		},
		value: {
			control: 'text',
			description: 'Selected value',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		required: {
			control: 'boolean',
			description: 'Show required indicator',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text (defaults to label)',
		},
		onChange: {
			action: 'changed',
			description: 'Change handler',
		},
	},
	args: {
		onChange: fn(),
	},
} satisfies Meta<DropdownProps>;

export default meta;
type Story = StoryObj<DropdownProps>;

const defaultOptions = [
	{ value: 'retail', label: 'Retail Store Owner' },
	{ value: 'convenience', label: 'Convenience Shop' },
	{ value: 'hospitality', label: 'Hospitality' },
	{ value: 'catering', label: 'Catering & Events' },
	{ value: 'online', label: 'Online/Delivery Only' },
];

const DropdownWrapper = (props: Partial<DropdownProps>) => {
	const [value, setValue] = useState(props.value || '');
	return (
		<Dropdown
			label={props.label || 'Label'}
			value={value}
			onChange={setValue}
			options={props.options || defaultOptions}
			{...props}
		/>
	);
};

export const Default: Story = {
	render: () => <DropdownWrapper label="Label" required />,
};

export const Active: Story = {
	render: () => (
		<div className="space-y-4">
			<p className="text-body text-body-sm">
				Click on the dropdown to see the active state
			</p>
			<DropdownWrapper label="Label" required />
		</div>
	),
};

export const Selected: Story = {
	render: () => <DropdownWrapper label="Label" value="retail" required />,
};

export const Disabled: Story = {
	render: () => (
		<DropdownWrapper label="Label" value="retail" disabled required />
	),
};

export const Opened: Story = {
	render: () => (
		<div className="space-y-4">
			<p className="text-body text-body-sm">
				Click on the dropdown to open the menu
			</p>
			<DropdownWrapper label="Label" required />
		</div>
	),
};

export const AllStates: Story = {
	render: () => (
		<div className="min-h-screen w-full p-16 bg-surface-page">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-heading font-semibold text-heading-h6 mb-16">
					Dropdowns
				</h2>

				<div className="flex gap-12">
					<div className="flex flex-col gap-[71px] w-32 pt-2">
						<div className="flex items-center h-[68px]">
							<span className="text-body text-body-md">Default</span>
						</div>
						<div className="flex items-center h-[68px]">
							<span className="text-body text-body-md">Focus</span>
						</div>
						<div className="flex items-center h-[68px]">
							<span className="text-body text-body-md">Selected</span>
						</div>
						<div className="flex items-center h-[68px]">
							<span className="text-body text-body-md">Disabled</span>
						</div>
						<div className="flex items-center h-[260px]">
							<span className="text-body text-body-md">Opened</span>
						</div>
					</div>

						<div className="flex flex-col gap-16 w-[304px]">
						<DropdownWrapper label="Label" required />

						<DropdownWrapper label="Label" required />

						<DropdownWrapper label="Label" value="retail" required />

						<DropdownWrapper
							label="Label"
							value="retail"
							disabled
							required
						/>

						<div className="relative" style={{ minHeight: '240px' }}>
							<DropdownWrapper label="Label" required />
							<p className="text-body-xs text-passive mt-2">
								(Click to open the dropdown menu)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	),
};

export const Playground: Story = {
	args: {
		label: 'Label',
		value: '',
		disabled: false,
		required: true,
		options: defaultOptions,
	},
	render: (args) => <DropdownWrapper {...args} />,
};
