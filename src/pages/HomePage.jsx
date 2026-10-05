import React, { useState } from 'react';
import { EnrollmentTimer } from '../components/EnrollmentTimer';
import { ApplicationForm } from '../components/ApplicationForm';

export const HomePage = ({ setActiveTab }) => {
  const [isExpired, setIsExpired] = useState(false);

  const scrollToPartners = () => {
    const el = document.getElementById('partners-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEnrollment = () => {
    const el = document.getElementById('enrollment-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    { name: 'Татнефть', url: 'https://www.tatneft.ru/' },
    { name: 'ICL', url: 'https://icl.ru/' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {/* Главный баннер */}
      <div className="card grid-2" style={{ alignItems: 'center' }}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
            alt="Лекция" 
            style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '320px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <h1 style={{ fontSize: '28px', lineHeight: '1.3', fontWeight: '700' }}>
            Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
          </h1>
          
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={scrollToEnrollment}
              style={{
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                border: '1px solid #bfdbfe',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ⏳ ЗАПИСЬ В ГРУППУ ↓
            </button>

            <button 
              onClick={scrollToPartners}
              style={{
                backgroundColor: 'transparent',
                color: '#3b82f6',
                border: '2px solid #3b82f6',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ПАРТНЁРЫ ↓
            </button>

            <button 
              onClick={() => setActiveTab('lecturers')}
              style={{
                backgroundColor: '#3b82f6',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              НАЙТИ ЛЕКТОРА →
            </button>
          </div>
        </div>
      </div>

      {/* О преподавателях */}
      <div className="card" style={{ backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>О преподавателях</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>10</div>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>Ведущих экспертов</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>25+</div>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>Учебных дисциплин</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>2000+</div>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>Проведенных лекций</div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>35 лет</div>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>Максимальный стаж</div>
          </div>
        </div>
      </div>

      {/* Вариант 9: Секция набора в группу (Таймер обратного отсчета + Форма заявки) */}
      <div id="enrollment-section" className="card grid-2" style={{ backgroundColor: '#ffffff', alignItems: 'stretch' }}>
        <EnrollmentTimer 
          initialMinutes={15} 
          onExpire={() => setIsExpired(true)} 
        />
        <ApplicationForm 
          isExpired={isExpired} 
        />
      </div>

      {/* Блок Партнеры (якорь) */}
      <div id="partners-section" className="card" style={{ backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Наши партнёры</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', textAlign: 'center' }}>
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '20px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontWeight: '600',
                color: '#3b82f6',
                textDecoration: 'none',
                display: 'block',
                transition: 'all 0.2s',
                backgroundColor: '#f9fafb'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.backgroundColor = '#eff6ff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
            >
              {partner.name} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};