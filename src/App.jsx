import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageSearch } from './pages/PageSearch';

import { PageAbout } from './pages/PageAbout';

function App() {
  return (
    <>
      <h1>Video Store</h1>
      <nav>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/search" element={<PageSearch />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </>
  );
}

export default App;
