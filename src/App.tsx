import { useEffect, useState } from 'react';
import { Homepage } from './pages/Homepage';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    root.classList.add('theme-editorial');
  }, [isDark]);

  return (
    <div className="min-h-screen w-full transition-colors duration-300">
      <Homepage isDark={isDark} onToggleTheme={() => setIsDark((previous) => !previous)} />
    </div>
  );
}

export default App;
