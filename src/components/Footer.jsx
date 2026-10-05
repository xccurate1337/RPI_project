import React from 'react';

export const Footer = () => {
  return (
    <footer style={{
      marginTop: '50px',
      padding: '24px 0',
      borderTop: '1px solid #e5e7eb',
      color: '#6b7280',
      fontSize: '14px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <p>© {new Date().getFullYear()} Учебная платформа. Все права защищены.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Контакты: info@lectures.ru</span>
          <span>Тел: +7 (800) 555-35-35</span>
        </div>
      </div>
    </footer>
  );
};