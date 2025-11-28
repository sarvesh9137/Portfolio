import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-20 right-6 z-50 p-3 rounded-full neon-button hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-cyan-400 animate-spin-slow" />
            ) : (
                <Moon className="w-6 h-6 text-purple-600 animate-pulse" />
            )}
        </button>
    );
};
