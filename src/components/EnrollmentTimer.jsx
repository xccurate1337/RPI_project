import React, { useState, useEffect, useRef } from 'react';
import './EnrollmentTimer.css';

export const EnrollmentTimer = ({ initialMinutes = 15, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const timerRef = useRef(null);

  useEffect(() => {
    // Сохраняем идентификатор интервала в useRef
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          if (onExpire) {
            onExpire();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Очистка таймера при размонтировании компонента (уходе со страницы) — предотвращает утечку памяти
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isExpired = timeLeft === 0;

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="enrollment-timer-card">
      <div className="timer-badge">
        <span className="pulse-dot" style={{ backgroundColor: isExpired ? '#ef4444' : '#10b981' }}></span>
        <span>{isExpired ? 'Набор завершён' : 'Набор открыт'}</span>
      </div>

      <h3 className="timer-heading">До конца набора в группу осталось:</h3>
      <p className="timer-subtext">
        {isExpired
          ? 'Приём заявок в основной поток закрыт. Доступна запись в резервный список.'
          : 'Успейте забронировать место в группе по специальной стоимости!'}
      </p>

      <div className="timer-digits-wrapper">
        <div className="digit-box">
          <span className="digit-value">{formatNumber(minutes)}</span>
          <span className="digit-label">минут</span>
        </div>

        <span className="digit-separator">:</span>

        <div className="digit-box">
          <span className="digit-value">{formatNumber(seconds)}</span>
          <span className="digit-label">секунд</span>
        </div>
      </div>

      <div className="timer-footer-note">
        <span>⚡ Свободных мест в группе: <strong>{isExpired ? 0 : 3} из 12</strong></span>
      </div>
    </div>
  );
};
