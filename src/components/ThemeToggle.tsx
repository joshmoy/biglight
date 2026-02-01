import { useTheme } from '../contexts';

export interface ThemeToggleProps {
	className?: string;
	showLabel?: boolean;
}

export function ThemeToggle({ className = '', showLabel = true }: ThemeToggleProps) {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className={`inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary bg-surface-disabled-dark hover:bg-surface-hover transition-colors ${className}`}
			aria-label="Toggle theme"
		>
			<span className="text-body-sm text-body">
				{showLabel && 'Click to switch theme: '}
				<strong className="text-brand font-medium">
					{theme === 'brand-a' ? 'Brand A' : 'Brand B'}
				</strong>
			</span>
		</button>
	);
}
