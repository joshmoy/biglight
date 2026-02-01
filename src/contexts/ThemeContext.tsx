import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

export type Theme = 'brand-a' | 'brand-b';

interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = 'app-theme';
const DEFAULT_THEME: Theme = 'brand-a';

const getInitialTheme = (): Theme => {
	if (typeof window === 'undefined') return DEFAULT_THEME;

	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === 'brand-a' || stored === 'brand-b') {
		return stored;
	}

	return DEFAULT_THEME;
};

interface ThemeProviderProps {
	children: ComponentChildren;
	defaultTheme?: Theme;
}

export function ThemeProvider({
	children,
	defaultTheme,
}: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(
		defaultTheme ?? getInitialTheme()
	);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
	};

	const toggleTheme = () => {
		setThemeState((prev) => (prev === 'brand-a' ? 'brand-b' : 'brand-a'));
	};

	const value: ThemeContextValue = {
		theme,
		setTheme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme(): ThemeContextValue {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
