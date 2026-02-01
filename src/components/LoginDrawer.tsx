import { useState } from 'preact/hooks';
import { Button } from './Button';
import { Card } from './Card';
import { Input } from './Input';
import { Dropdown } from './Dropdown';
import closeIconCircle from '../assets/icons/close-icon-circle.svg';
import closeIconX from '../assets/icons/close-icon-x.svg';

export type LoginDrawerSize = 'desktop' | 'mobile';

export interface LoginDrawerProps {
	size?: LoginDrawerSize;
	onClose?: () => void;
	onContinue?: () => void;
	onPasswordLogin?: () => void;
	onJoinClick?: () => void;
	className?: string;
}

const sizeStyles: Record<LoginDrawerSize, string> = {
	desktop: 'w-[480px] gap-10 px-10 py-11',
	mobile: 'w-[375px] gap-8 px-6 py-4',
};

const titleStyles: Record<LoginDrawerSize, string> = {
	desktop: 'text-[40px] leading-[48px]',
	mobile: 'text-[24px] leading-[28.8px]',
};

const formGapStyles: Record<LoginDrawerSize, string> = {
	desktop: 'gap-8',
	mobile: 'gap-8',
};

export function LoginDrawer({
	size = 'desktop',
	onClose,
	onContinue,
	onPasswordLogin,
	onJoinClick,
	className = '',
}: LoginDrawerProps) {
	const [customerType, setCustomerType] = useState('');
	const [email, setEmail] = useState('');

	const closeIcon = size === 'desktop' ? closeIconCircle : closeIconX;
	const closeIconSize = size === 'desktop' ? 'w-[14px] h-[14px]' : 'w-5 h-5';

	const customerTypeOptions = [
		{ value: 'individual', label: 'Individual' },
		{ value: 'business', label: 'Business' },
		{ value: 'enterprise', label: 'Enterprise' },
	];

	return (
		<div
			className={`flex flex-col bg-white ${sizeStyles[size]} ${className}`.trim()}
		>
			<button
				onClick={onClose}
				className={`self-end ${closeIconSize} flex items-center justify-center`}
				aria-label="Close"
			>
				<img
					src={closeIcon}
					alt=""
					className={`${closeIconSize}`}
					aria-hidden="true"
				/>
			</button>

			<div className={`flex flex-col ${formGapStyles[size]}`}>
				<div className="flex flex-col gap-8">
					<h2
						className={`font-['Inter'] font-medium text-[#fc4c02] ${titleStyles[size]}`}
					>
						Log into your account
					</h2>
					<p className="font-['Inter'] text-base font-normal leading-[22.4px] text-black">
						Please enter your email for a one-time-only code
					</p>
				</div>

				<form className={`flex flex-col ${formGapStyles[size]}`}>
					<Dropdown
						label="Customer type"
						value={customerType}
						onChange={setCustomerType}
						options={customerTypeOptions}
						placeholder="Customer type"
						showLeftIcon={false}
					/>

					<Input
						label="Email"
						value={email}
						onChange={setEmail}
						placeholder="Email"
					/>
				</form>

				<div className="flex flex-col gap-4">
					<Button
						variant="primary"
						size="md"
						onClick={onContinue}
						className="w-full !bg-black !text-white hover:!bg-gray-800 !px-6 !py-3.5"
					>
						Continue
					</Button>
					<Button
						variant="tertiary"
						size="md"
						onClick={onPasswordLogin}
						className="w-full !bg-white !text-black !border-[1.5px] !border-black hover:!bg-gray-50 !px-6 !py-3.5"
					>
						Login with your password
					</Button>
				</div>

				<Card
					size={size === 'desktop' ? 'desktop' : 'mobile'}
					title="Join the family."
					buttonText="Become a member"
					onButtonClick={onJoinClick}
				/>
			</div>
		</div>
	);
}
