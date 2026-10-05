import React from 'react';

export const PartnerCard = ({ partner }) => {
  return (
    <div style={{
      background: '#ffffff',
      padding: '28px',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between'
    }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '32px', fontWeight: '900', color: partner.id === 'icl' ? '#e11d48' : '#16a34a' }}>
            {partner.logoText}
          </span>
          <a 
            href={partner.link} 
            target="_blank" 
            rel="noreferrer" 
            style={{ fontSize: '28px', textDecoration: 'none', color: '#1a1a1a', fontWeight: 'bold' }}
            title="Перейти на сайт"
          >
            ↗
          </a>
        </div>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4b5563' }}>
          {partner.description}
        </p>
      </div>
    </div>
  );
};