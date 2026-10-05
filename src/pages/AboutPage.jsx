import React from 'react';

// Компонент 1: Ключевые показатели
const InnopolisStats = () => {
  const stats = [
    { number: '100%', label: 'Трудоустройство выпускников' },
    { number: '10+', label: 'Ведущих IT-лекторов' },
    { number: '2', label: 'Стратегических партнера (Татнефть, ICL)' },
    { number: '25+', label: 'Актуальных дисциплин' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '12px' }}>
      {stats.map((stat, idx) => (
        <div key={idx} style={{ padding: '16px', backgroundColor: '#f0f7ff', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#1d4ed8' }}>{stat.number}</div>
          <div style={{ fontSize: '13px', color: '#4b5563', marginTop: '4px', fontWeight: '500' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Компонент 2: Сотрудничество с индустрией
const PartnerHighlights = () => {
  return (
    <div className="grid-2" style={{ marginTop: '12px' }}>
      <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: '#f9fafb' }}>
        <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px' }}>
          🏭 Индустриальные кейсы
        </h4>
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5' }}>
          Совместно с компаниями Татнефть и ICL мы внедряем практические проекты прямо в учебные дисциплины.
        </p>
      </div>

      <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '12px', backgroundColor: '#f9fafb' }}>
        <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px' }}>
          🎓 Практика и стажировки
        </h4>
        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5' }}>
          Студенты получают возможность проходить стажировку у лучших экспертов отрасли с 1-го курса.
        </p>
      </div>
    </div>
  );
};

export const AboutPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Основное описание из макета */}
      <div className="card" style={{ padding: '40px' }}>
        <p style={{ fontSize: '22px', lineHeight: '1.6', fontWeight: '500', color: '#1a1a1a' }}>
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов, которые не просто делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </div>

      {/* Ключевые показатели */}
      <div className="card">
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>Ключевые показатели</h2>
        <InnopolisStats />
      </div>

      {/* Сотрудничество с индустрией */}
      <div className="card">
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>Сотрудничество с индустрией</h2>
        <PartnerHighlights />
      </div>

      {/* Дополнительный блок: Как мы работаем */}
      <div className="card">
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Как мы работаем</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#3b82f6', marginBottom: '8px' }}>01. Заявка</div>
            <div style={{ color: '#555', fontSize: '14px' }}>Определяете тему лекции, формат (онлайн/оффлайн) и целевую аудиторию.</div>
          </div>
          <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#3b82f6', marginBottom: '8px' }}>02. Подбор</div>
            <div style={{ color: '#555', fontSize: '14px' }}>Мы подбираем оптимального лектора под ваши задачи и подготавливаем программу.</div>
          </div>
          <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#3b82f6', marginBottom: '8px' }}>03. Проведение</div>
            <div style={{ color: '#555', fontSize: '14px' }}>Организуем мероприятие «под ключ» с гарантиями качества.</div>
          </div>
        </div>
      </div>
    </div>
  );
};