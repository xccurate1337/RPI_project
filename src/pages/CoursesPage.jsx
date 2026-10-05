import React from 'react';
import { LECTURERS } from '../data/lecturers';

export const CoursesPage = ({ setActiveTab }) => {
  const handleLecturerClick = (lecturerId) => {
    if (setActiveTab) {
      // Передаем ID лектора вместе с переключением вкладки
      setActiveTab('lecturers', lecturerId);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700' }}>Каталог дисциплин</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {LECTURERS.map((lecturer) => (
          <div key={lecturer.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Заголовок с ФИО-гиперссылкой */}
            <div style={{ 
              display: 'flex', 
              justify: 'space-between', 
              alignItems: 'center', 
              borderBottom: '1px solid #e5e7eb', 
              paddingBottom: '12px' 
            }}>
              <div>
                <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600', display: 'block' }}>
                  Преподаватель
                </span>
                <button
                  onClick={() => handleLecturerClick(lecturer.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#3b82f6',
                    fontSize: '20px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    padding: 0,
                    textDecoration: 'underline',
                    textAlign: 'left'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#1d4ed8')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#3b82f6')}
                >
                  {lecturer.name} →
                </button>
              </div>

              <span style={{ fontSize: '13px', color: '#4b5563', backgroundColor: '#f3f4f6', padding: '4px 10px', borderRadius: '6px' }}>
                Стаж: {lecturer.experience}
              </span>
            </div>

            {/* Список дисциплин преподавателя */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {lecturer.disciplines.map((disc, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px', 
                    padding: '14px', 
                    backgroundColor: '#f9fafb' 
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                    📖 {disc.name}
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '13px', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {disc.topics?.map((topic, tIdx) => (
                      <li key={tIdx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};