import type { Meta, StoryObj } from '@storybook/preact-vite';
import { fn } from 'storybook/test';
import { Input } from './Input';
import type { InputProps } from './Input';
import { useState } from 'preact/hooks';

const meta = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label text for the input',
		},
		value: {
			control: 'text',
			description: 'Input value',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		error: {
			control: 'boolean',
			description: 'Error state',
		},
		success: {
			control: 'boolean',
			description: 'Success state',
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
		onClear: {
			action: 'cleared',
			description: 'Clear handler',
		},
	},
	args: {
		onChange: fn(),
		onClear: fn(),
	},
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

const InputWrapper = (props: Partial<InputProps>) => {
	const [value, setValue] = useState(props.value || '');
	return (
		<Input
			label={props.label || 'Label'}
			value={value}
			onChange={setValue}
			{...props}
		/>
	);
};

export const Default: Story = {
	render: () => <InputWrapper label="Input label" required />,
};

export const Focus: Story = {
	render: () => (
		<div className="space-y-4">
			<p className="text-body text-body-sm">
				Click on the input to see the focus state
			</p>
			<InputWrapper label="Label" required />
		</div>
	),
};

export const Filled: Story = {
	render: () => <InputWrapper label="Label" value="Placeholder" required />,
};

export const Disabled: Story = {
	render: () => (
		<InputWrapper label="Label" value="Input label" disabled required />
	),
};

export const Error: Story = {
	render: () => (
		<InputWrapper label="Label" value="Placeholder" error required />
	),
};

export const Success: Story = {
	render: () => (
		<InputWrapper label="Label" value="Placeholder" success required />
	),
};

export const AllStates: Story = {
	render: () => (
		<div className="min-h-screen w-full p-16 bg-surface-page">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-heading font-semibold text-heading-h6 mb-16">
					Input fields
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
							<span className="text-body text-body-md">Filled</span>
						</div>
						<div className="flex items-center h-[68px]">
							<span className="text-body text-body-md">Disabled</span>
						</div>
						<div className="flex items-center h-[68px]">
							<span className="text-body text-body-md">Error</span>
						</div>
						<div className="flex items-center h-[68px]">
							<span className="text-body text-body-md">Success</span>
						</div>
					</div>

					<div className="flex flex-col gap-16 w-[304px]">
						<InputWrapper label="Input label" required />

						<InputWrapper label="Label" required />

						<InputWrapper label="Label" value="Placeholder" required />

						<InputWrapper
							label="Label"
							value="Input label"
							disabled
							required
						/>

						<InputWrapper
							label="Label"
							value="Placeholder"
							error
							required
						/>

						<InputWrapper
							label="Label"
							value="Placeholder"
							success
							required
						/>
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
		error: false,
		success: false,
		required: true,
		placeholder: '',
	},
	render: (args) => <InputWrapper {...args} />,
};
