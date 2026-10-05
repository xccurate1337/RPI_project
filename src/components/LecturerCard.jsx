import React from 'react';

export const LecturerCard = ({ lecturer, onSelect }) => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '24px',
      borderRadius: '16px',
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: '24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <img
        src={lecturer.photo}
        alt={lecturer.name}
        style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '22px', color: '#1a1a1a', marginBottom: '8px' }}>{lecturer.name}</h2>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '4px' }}><strong>Образование:</strong> {lecturer.education}</p>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '12px' }}><strong>Стаж:</strong> {lecturer.experience} | <strong>Степень:</strong> {lecturer.degree}</p>

          <div style={{ marginBottom: '12px' }}>
            <strong style={{ fontSize: '15px' }}>Дисциплины:</strong>
            <ul style={{ paddingLeft: '20px', marginTop: '4px', fontSize: '14px', color: '#444' }}>
              {lecturer.disciplines.map((d, index) => (
                <li key={index}>
                  <strong>{d.name || d}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {lecturer.tariffs && lecturer.tariffs.map((t, idx) => (
              <span key={idx} style={{ background: '#f1f5f9', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', color: '#334155' }}>
                {t.title}: <strong>{t.price}</strong>
              </span>
            ))}
          </div>

          {onSelect && (
            <button
              onClick={() => onSelect(lecturer)}
              style={{
                backgroundColor: '#89A8D6',
                color: '#fff',
                border: 'none',
                padding: '10px 18px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Записаться
            </button>
          )}
        </div>
      </div>
    </div>
  );
};