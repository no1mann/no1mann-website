import { useEffect, useState } from 'react';
import { Homepage } from './pages/Homepage';

const THEME_STORAGE_KEY = 'theme-preference';

function getInitialThemePreference() {
  if (typeof window === 'undefined') {
    return true;
  }

  const storedThemePreference = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedThemePreference === 'dark') {
    return true;
  }
  if (storedThemePreference === 'light') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function App() {
  const [isDark, setIsDark] = useState(getInitialThemePreference);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    root.classList.add('theme-editorial');
    window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="min-h-screen w-full transition-colors duration-300">
      <Homepage isDark={isDark} onToggleTheme={() => setIsDark((previous) => !previous)} />
    </div>
  );
}

export default App;
