import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LecturersPage } from './pages/LecturersPage';
import { CoursesPage } from './pages/CoursesPage';
import { PartnersPage } from './pages/PartnersPage';
import { AboutPage } from './pages/AboutPage';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLecturerId, setSelectedLecturerId] = useState(null);

  const handleTabChange = (tab, lecturerId = null) => {
    setActiveTab(tab);
    if (lecturerId) {
      setSelectedLecturerId(lecturerId);
    } else if (tab !== 'lecturers') {
      setSelectedLecturerId(null);
    }
  };

  return (
    <div className="app-wrapper">
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />
      
      <main style={{ marginTop: '20px' }}>
        {activeTab === 'home' && <HomePage setActiveTab={handleTabChange} />}
        {activeTab === 'partners' && <PartnersPage />}
        
        {activeTab === 'about' && <AboutPage />}

        {activeTab === 'lecturers' && <LecturersPage selectedLecturerId={selectedLecturerId} />}
        {activeTab === 'courses' && <CoursesPage setActiveTab={handleTabChange} />}
      </main>
    </div>
  );
}

export default App;