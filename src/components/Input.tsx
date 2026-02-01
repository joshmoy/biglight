import type { JSX } from 'preact';
import { useState } from 'preact/hooks';
import CloseIcon from '../assets/icons/close.svg';
import CloseDisabledIcon from '../assets/icons/close-disabled.svg';
import CloseErrorIcon from '../assets/icons/close-error.svg';
import CheckSuccessIcon from '../assets/icons/check-success.svg';

export interface InputProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
	disabled?: boolean;
	error?: boolean;
	success?: boolean;
	required?: boolean;
	placeholder?: string;
	onClear?: () => void;
	className?: string;
	id?: string;
}

export function Input({
	label,
	value,
	onChange,
	disabled = false,
	error = false,
	success = false,
	required = false,
	placeholder,
	onClear,
	className = '',
	id,
}: InputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const hasValue = value.length > 0;
	const showFloatingLabel = isFocused || hasValue;

	const handleChange = (e: JSX.TargetedEvent<HTMLInputElement>) => {
		onChange(e.currentTarget.value);
	};

	const handleClear = () => {
		if (onClear) {
			onClear();
		} else {
			onChange('');
		}
	};

	const getBorderStyle = () => {
		if (disabled) {
			return 'border-0';
		}
		if (error) {
			return 'border-[1.5px] border-border-error';
		}
		if (isFocused) {
			return 'border-[1.5px] border-[#d1cfc7]';
		}
		if (hasValue) {
			return 'border-[2px] border-[#d1cfc7]';
		}
		return 'border-[0.5px] border-[#d1cfc7]';
	};

	const getIcon = () => {
		if (disabled) {
			return CloseDisabledIcon;
		}
		if (error) {
			return CloseErrorIcon;
		}
		if (success) {
			return CheckSuccessIcon;
		}
		return CloseIcon;
	};

	const isIconClickable = !disabled && !success && (hasValue || error);

	const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			<div className="relative">
				<div
					className={`relative flex items-center gap-2 rounded-md px-3 py-3.5 transition-all ${getBorderStyle()} ${
						disabled ? 'bg-surface-disabled-dark' : 'bg-surface-page'
					}`}
				>
					<input
						id={inputId}
						type="text"
						value={value}
						onChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						disabled={disabled}
						placeholder={showFloatingLabel ? '' : placeholder || label}
						className={`flex-1 bg-transparent text-body-md leading-body-md outline-none ${
							disabled
								? 'text-disabled placeholder:text-disabled'
								: hasValue
								? 'text-body'
								: 'text-passive placeholder:text-passive'
						}`}
					/>
					{(hasValue || error || success || disabled) && (
						<button
							type="button"
							onClick={isIconClickable ? handleClear : undefined}
							disabled={!isIconClickable}
							className={`flex-shrink-0 ${
								isIconClickable ? 'cursor-pointer' : 'cursor-default'
							}`}
							aria-label={success ? 'Success' : 'Clear input'}
						>
							<img
								src={getIcon()}
								alt=""
								className="w-2.5 h-2.5"
							/>
						</button>
					)}
				</div>

				{showFloatingLabel && (
					<div className="absolute left-3 -top-[6px] flex items-center gap-0 bg-[#faf9f5]">
						{hasValue && !error && !disabled && (
							<div className="w-[39px] h-[2px] bg-[#faf9f5] relative">
								<div className="absolute top-0 left-0 w-full h-[2px] bg-[#faf9f5]" />
							</div>
						)}
						<label
							htmlFor={inputId}
							className={`text-body-xs leading-body-xs px-1 ${
								error
									? 'text-error'
									: disabled
									? 'text-disabled'
									: 'text-body'
							}`}
						>
							{label}
						</label>
					</div>
				)}
			</div>

			{required && (
				<span className="text-body-xs leading-body-xs">
					<span className="text-warning">*</span>
					<span className="text-disabled">required</span>
				</span>
			)}
		</div>
	);
}
