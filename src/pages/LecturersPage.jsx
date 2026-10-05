import React, { useState, useEffect } from 'react';
import { LECTURERS } from '../data/lecturers';

export const LecturersPage = ({ selectedLecturerId }) => {
  const [openDisciplineMap, setOpenDisciplineMap] = useState({});

  useEffect(() => {
    if (selectedLecturerId) {
      // Автоматически открываем темы для выбранного лектора
      const initialMap = {};
      const lecturer = LECTURERS.find(l => l.id === selectedLecturerId);
      if (lecturer) {
        lecturer.disciplines.forEach((_, idx) => {
          initialMap[`${selectedLecturerId}-${idx}`] = true;
        });
        setOpenDisciplineMap(initialMap);
      }

      // Плавный скролл к лектору
      setTimeout(() => {
        const el = document.getElementById(`lecturer-${selectedLecturerId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [selectedLecturerId]);

  const toggleDiscipline = (lecturerId, discIdx) => {
    const key = `${lecturerId}-${discIdx}`;
    setOpenDisciplineMap((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700' }}>Наши лекторы</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {LECTURERS.map((lecturer) => {
          const isSelected = lecturer.id === selectedLecturerId;

          return (
            <div 
              key={lecturer.id} 
              id={`lecturer-${lecturer.id}`} 
              className="card grid-2" 
              style={{ 
                alignItems: 'start',
                position: 'relative',
                border: isSelected ? '2px solid #3b82f6' : '1px solid transparent',
                boxShadow: isSelected ? '0 0 15px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                backgroundColor: isSelected ? '#f0f7ff' : '#ffffff'
              }}
            >
              {/* Бейдж выбранного преподавателя */}
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  letterSpacing: '0.5px'
                }}>
                  ВЫБРАННЫЙ ПРЕПОДАВАТЕЛЬ
                </div>
              )}

              {/* Фото и общая информация */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <img 
                  src={lecturer.photo} 
                  alt={lecturer.name} 
                  style={{ width: '120px', height: '120px', borderRadius: '12px', objectFit: 'cover' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>{lecturer.name}</h2>
                  <p style={{ fontSize: '14px', color: '#4b5563' }}>{lecturer.education}</p>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                    <span>Стаж: {lecturer.experience}</span> • <span>{lecturer.degree}</span>
                  </div>
                </div>
              </div>

              {/* Дисциплины и выпадающие темы */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#374151' }}>
                  Дисциплины и темы:
                </h3>

                {lecturer.disciplines.map((disc, idx) => {
                  const isOpen = openDisciplineMap[`${lecturer.id}-${idx}`];
                  return (
                    <div 
                      key={idx} 
                      style={{ 
                        border: '1px solid #e5e7eb', 
                        borderRadius: '8px', 
                        overflow: 'hidden',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <button
                        onClick={() => toggleDiscipline(lecturer.id, idx)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          display: 'flex',
                          justify: 'space-between',
                          alignItems: 'center',
                          backgroundColor: isOpen ? '#eff6ff' : '#ffffff',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1d4ed8',
                          textAlign: 'left'
                        }}
                      >
                        <span>📖 {disc.name}</span>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>
                          {isOpen ? '▲ Скрыть' : `▼ Темы (${disc.topics?.length || 0})`}
                        </span>
                      </button>

                      {isOpen && (
                        <div style={{ padding: '10px 14px 12px 28px', backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb' }}>
                          <ul style={{ margin: 0, paddingLeft: '12px', fontSize: '13px', color: '#374151', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {disc.topics?.map((topic, tIdx) => (
                              <li key={tIdx}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};