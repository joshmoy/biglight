import { useState, useRef, useEffect } from 'preact/hooks';
import ClockIcon from '../assets/icons/clock.svg';
import ClockDisabledIcon from '../assets/icons/clock-disabled.svg';
import ChevronDownIcon from '../assets/icons/chevron-down.svg';
import ChevronDownDisabledIcon from '../assets/icons/chevron-down-disabled.svg';
import IndicatorLine from '../assets/icons/indicator-line.svg';

export interface DropdownOption {
	value: string;
	label: string;
}

export interface DropdownProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
	options: DropdownOption[];
	disabled?: boolean;
	required?: boolean;
	placeholder?: string;
	className?: string;
	id?: string;
	showLeftIcon?: boolean;
}

export function Dropdown({
	label,
	value,
	onChange,
	options,
	disabled = false,
	required = false,
	placeholder,
	className = '',
	id,
	showLeftIcon = true,
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const hasValue = value.length > 0;
	const showFloatingLabel = isFocused || hasValue || isOpen;
	const selectedOption = options.find((opt) => opt.value === value);
	const displayText = selectedOption?.label || placeholder || label;

	const dropdownId = id || `dropdown-${label.toLowerCase().replace(/\s+/g, '-')}`;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				setIsFocused(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const handleToggle = () => {
		if (!disabled) {
			setIsOpen(!isOpen);
			setIsFocused(!isOpen);
		}
	};

	const handleSelect = (optionValue: string) => {
		onChange(optionValue);
		setIsOpen(false);
		setIsFocused(false);
	};

	const getBorderStyle = () => {
		if (disabled) {
			return 'border-0';
		}
		if (isOpen || isFocused) {
			return 'border-[1.5px] border-[#d1cfc7]';
		}
		if (hasValue) {
			return 'border-[2px] border-[#d1cfc7]';
		}
		return 'border-[0.5px] border-[#d1cfc7]';
	};

	const getClockIcon = () => {
		return disabled ? ClockDisabledIcon : ClockIcon;
	};

	const getChevronIcon = () => {
		return disabled ? ChevronDownDisabledIcon : ChevronDownIcon;
	};

	return (
		<div className={`flex flex-col gap-1 ${className}`} ref={dropdownRef}>
			<div className="relative">
				<button
					id={dropdownId}
					type="button"
					onClick={handleToggle}
					disabled={disabled}
					className={`relative flex items-center gap-2 w-full rounded-md px-3 py-3.5 transition-all text-left ${getBorderStyle()} ${
						disabled ? 'bg-[#f5f4f0] cursor-not-allowed' : 'bg-[#faf9f5] cursor-pointer'
					}`}
				>
					<div className="flex items-center gap-2 flex-1">
						{showLeftIcon && <img
							src={getClockIcon()}
							alt=""
							className="w-[15px] h-[15px] flex-shrink-0"
						/>}
						<span
							className={`text-body-md leading-body-md ${
								disabled
									? 'text-disabled'
									: hasValue
									? 'text-body font-medium'
									: 'text-passive'
							}`}
						>
							{showFloatingLabel && !hasValue ? '' : displayText}
						</span>
					</div>
					<img
						src={getChevronIcon()}
						alt=""
						className={`w-2.5 h-1.5 flex-shrink-0 transition-transform ${
							isOpen ? 'rotate-180' : ''
						}`}
					/>
				</button>

				{showFloatingLabel && (
					<div className="absolute left-3 -top-[6px] flex items-center gap-0 bg-[#faf9f5] pointer-events-none">
						{hasValue && !disabled && (
							<div className="w-[39px] h-[2px] bg-[#faf9f5] relative">
								<div className="absolute top-0 left-0 w-full h-[2px] bg-[#faf9f5]" />
							</div>
						)}
						<label
							htmlFor={dropdownId}
							className={`text-body-xs leading-body-xs px-1 ${
								disabled ? 'text-disabled' : 'text-body'
							}`}
						>
							{label}
						</label>
					</div>
				)}

				{isOpen && !disabled && (
					<div className="absolute top-full left-0 w-full mt-2 bg-[#faf9f5] rounded-md shadow-lg border border-[#d1cfc7] z-10 overflow-hidden">
						<div className="max-h-[200px] overflow-y-auto">
							{options.map((option) => (
								<button
									key={option.value}
									type="button"
									onClick={() => handleSelect(option.value)}
									className="w-full px-4 py-3 text-left text-body text-body-sm hover:bg-surface-hover transition-colors"
								>
									{option.label}
								</button>
							))}
						</div>
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
