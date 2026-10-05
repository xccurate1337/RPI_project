import React, { useState } from 'react';
import './ApplicationForm.css';

export const ApplicationForm = ({ isExpired }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: 'IT и разработка',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', direction: 'IT и разработка' });
    setSubmitted(false);
  };

  return (
    <div className="application-form-card">
      <h3 className="form-heading">Заявка на обучение</h3>
      <p className="form-subtext">
        Заполните форму, и наш академический консультант свяжется с вами в течение 15 минут.
      </p>

      {submitted ? (
        <div className="form-success-box">
          <div className="success-icon">✓</div>
          <h4 className="success-title">Заявка успешно отправлена!</h4>
          <p className="success-text">
            Спасибо, <strong>{formData.name}</strong>! Мы забронировали место по направлению <strong>«{formData.direction}»</strong>.
          </p>
          <button type="button" className="btn-reset-form" onClick={handleReset}>
            Подать ещё одну заявку
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="enrollment-form">
          <div className="form-field">
            <label className="form-label">Ваше имя</label>
            <input
              type="text"
              required
              placeholder="Иван Иванов"
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-field">
            <label className="form-label">Телефон или Telegram</label>
            <input
              type="text"
              required
              placeholder="+7 (999) 000-00-00 или @username"
              className="form-input"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="form-field">
            <label className="form-label">Направление подготовки</label>
            <select
              className="form-select"
              value={formData.direction}
              onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
            >
              <option value="IT и разработка">IT и разработка</option>
              <option value="Физика и математика">Физика и математика</option>
              <option value="Архитектура и дизайн">Архитектура и дизайн</option>
              <option value="Экономика и финансы">Экономика и финансы</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-submit-form"
            disabled={isExpired}
            style={{
              backgroundColor: isExpired ? '#9ca3af' : '#3b82f6',
              cursor: isExpired ? 'not-allowed' : 'pointer',
            }}
          >
            {isExpired ? 'Набор в группу закрыт' : 'Забронировать место в группе →'}
          </button>
        </form>
      )}
    </div>
  );
};
