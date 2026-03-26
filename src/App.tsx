import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { PostsPage } from './pages/PostsPage';
import { ConversationsPage } from './pages/ConversationsPage';

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
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
    <div className="min-h-svh w-full transition-colors duration-300">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage isDark={isDark} onToggleTheme={() => setIsDark((previous) => !previous)} />}>
          <Route index element={<AboutPage workHref="/work" />} />
          <Route path="about" element={<Navigate to="/" replace />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="posts">
            <Route index element={<PostsPage />} />
            <Route path=":slug" element={<PostsPage />} />
          </Route>
          <Route path="conversations" element={<ConversationsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
