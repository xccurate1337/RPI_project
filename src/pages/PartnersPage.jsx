import React from 'react';

export const PartnersPage = () => {
  const partners = [
    {
      id: 'icl',
      name: 'ICL',
      link: 'https://icl.ru',
      logoText: 'ICL',
      description: 'ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС).'
    },
    {
      id: 'tatneft',
      name: 'Татнефть',
      link: 'https://www.tatneft.ru',
      logoText: 'TATNEFT',
      description: '«Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур.'
    }
  ];

  return (
    <div className="grid-2">
      {partners.map((partner) => (
        <div key={partner.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '32px', fontWeight: '900', color: partner.id === 'icl' ? '#e11d48' : '#16a34a' }}>
                {partner.logoText}
              </span>
              <a href={partner.link} target="_blank" rel="noreferrer" className="arrow-link" title="Перейти на сайт компании">
                ↗
              </a>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4b5563' }}>
              {partner.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};