interface ThemeToggle {
    theme: string,
    onToggle: () => void
}

const ThemeToggle = ({ theme, onToggle }: ThemeToggle) => {
    return (
        <div>
            <button aria-label="toggle-theme" onClick={onToggle}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>
        </div>
    )
}

export default ThemeToggle;