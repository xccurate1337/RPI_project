import React from 'react';

export const Header = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'partners', label: 'Партнеры' },
    { id: 'about', label: 'О нас' },
    { id: 'lecturers', label: 'Лекторы' },
    { id: 'courses', label: 'Дисциплины' }
  ];

  return (
    <header className="header-container navbar-gradient sticky top-0 z-50 text-white shadow-lg">
      <nav className="nav-bar">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};