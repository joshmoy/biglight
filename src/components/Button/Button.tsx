import type { ComponentChildren } from 'preact';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	children: ComponentChildren;
	onClick?: (event: MouseEvent) => void;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		'bg-action-primary text-action-onprimary hover:bg-action-hover-primary hover:text-action-onsecondary disabled:bg-surface-disabled-dark disabled:text-action-disabled',
	secondary:
		'bg-action-secondary text-action-onsecondary hover:bg-action-hover-secondary hover:text-action-onprimary disabled:bg-surface-disabled-dark disabled:text-action-disabled',
	tertiary:
		'bg-transparent text-action-ontertiary border-[1.5px] border-border-primary hover:bg-action-secondary hover:text-action-onsecondary disabled:border-border-disabled disabled:text-action-disabled',
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: 'px-4 py-2.5 text-action-sm leading-action-sm gap-2',
	md: 'px-6 py-3.5 text-action-md leading-action-md gap-2',
};

export function Button({
	variant = 'primary',
	size = 'md',
	disabled = false,
	children,
	onClick,
	type = 'button',
	className = '',
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center rounded-round font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-border-action-active focus-visible:ring-offset-2 disabled:cursor-not-allowed';

	const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={combinedClassName}
		>
			{children}
		</button>
	);
}
