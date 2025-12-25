'use client'
import { useEffect, useState } from 'react';
import './BlockModal.scss';

const BlockModal = ({ allowClose = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Устанавливаем таймер на 3 секунды
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        {allowClose && (
          <button 
            className="closeButton"
            onClick={() => setIsVisible(false)}
            aria-label="Закрыть уведомление"
          >
            &times;
          </button>
        )}

          <div className='leftHalf'>
            <h2>Обновленный график работы клиники</h2>
            <p>26.12 время работы 9.00 - 14.00 <br /> 27.12 время работы 14.00 - 20.00</p>
            <p>Поздравляем всех с наступающим новым годом!</p>
          </div>
          <div className='rightHalf'>
            <img src="/favicon/favicon.svg" alt="" />
          </div>

      </div>
    </div>
  );
};

export default BlockModal;