import React, { useState, useEffect, useRef } from 'react';
import './EnrollmentTimer.css';

const STORAGE_KEY = 'group_enrollment_timer_seconds';

export const EnrollmentTimer = ({ initialMinutes = 15, onExpire }) => {
  // Сохраняем состояние между переходами по страницам
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      const parsed = parseInt(saved, 10);
      return !isNaN(parsed) && parsed >= 0 ? parsed : initialMinutes * 60;
    }
    return initialMinutes * 60;
  });

  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  // Запуск таймера через setInterval с сохранением id в useRef
  const startTimer = () => {
    if (timerRef.current) return;

    console.log('⏱️ [EnrollmentTimer] Таймер запущен (useRef id сохранен).');

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          sessionStorage.setItem(STORAGE_KEY, '0');
          if (onExpire) onExpire();
          return 0;
        }

        const next = prev - 1;
        sessionStorage.setItem(STORAGE_KEY, String(next));
        return next;
      });
    }, 1000);

    setIsRunning(true);
  };

  // Остановка таймера через clearInterval(timerRef.current)
  const stopTimer = (reason = '') => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      console.warn(`🛑 [EnrollmentTimer] Таймер остановлен (${reason || 'очистка ресурсов'}). Утечка памяти предотвращена!`);
    }
    setIsRunning(false);
  };

  useEffect(() => {
    // 1. Старт таймера при монтировании компонента на HomePage
    startTimer();

    // 2. Остановка таймера при уходе с вкладки браузера (Page Visibility API)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer('пользователь свернул/переключил вкладку браузера');
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 3. Обязательный cleanup при уходе со страницы (размонтировании HomePage)
    // Гарантирует, что интервал не продолжает работать в фоне и нет утечки памяти
    return () => {
      stopTimer('размонтирование компонента при переходе на другую страницу сайта');
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isExpired = timeLeft === 0;

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="enrollment-timer-card">
      <div className="timer-badge">
        <span
          className="pulse-dot"
          style={{ backgroundColor: isExpired ? '#ef4444' : isRunning ? '#10b981' : '#f59e0b' }}
        ></span>
        <span>
          {isExpired
            ? 'Набор завершён'
            : isRunning
            ? 'Набор открыт'
            : 'Таймер на паузе (вкладка скрыта)'}
        </span>
      </div>

      <h3 className="timer-heading">До конца набора в группу осталось:</h3>
      <p className="timer-subtext">
        {isExpired
          ? 'Приём заявок в основной поток закрыт. Доступна запись в лист ожидания.'
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
        <span>⚡ Мест в группе: <strong>{isExpired ? 0 : 3} из 12</strong></span>
      </div>
    </div>
  );
};
