"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import { PatternFormat } from "react-number-format";
import styles from './UniversalModalForm.module.scss';

// Описываем, какие параметры (пропсы) может принимать наша форма
interface UniversalModalProps {
  isOpen: boolean;           // Состояние: открыто/закрыто
  onClose: () => void;       // Функция закрытия
  title?: string;            // Основной заголовок
  titleInText?: string;            // Основной заголовок
  loadingTitle?: string;     // Заголовок во время отправки
  bgImage?: string;          // Путь до картинки (если нет, будет просто белый фон)
  goalName?: string;         // Название цели для Яндекс.Метрики
}

export const UniversalModalForm: React.FC<UniversalModalProps> = ({
  isOpen,
  onClose,
  title = "Оставьте заявку", // Значение по умолчанию
  loadingTitle = "Отправляем данные...", // Значение по умолчанию
  bgImage,
  titleInText,
  goalName = "PopUpForm" // Цель по умолчанию
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Очищаем форму при закрытии окна
  useEffect(() => {
    if (!isOpen) {
      setName('');
      setPhone('');
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ВАЛИДАЦИЯ ТЕЛЕФОНА
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length !== 11) {
      alert("Пожалуйста, введите номер телефона полностью.");
      return;
    }

    setIsLoading(true);

    const text = `Заявка из формы: ${titleInText}\nИмя: ${name}\nТелефон: ${phone}`;

    const idInstance = "3100517801";
    const apiTokenInstance = "4e23b210658549c881680633b93bb11301a0f304a927433da6";

    try {
      const maxResponse = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatId: `79029830005@c.us`,
            message: text,
          }),
        }
      );

      if (maxResponse.ok) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).ym(105543299, "reachGoal", goalName);
        alert("Заявка успешно отправлена!");
        onClose(); // Закрываем модалку при успехе
      } else {
        console.error("Ошибка API:", await maxResponse.text());
        alert("Произошла ошибка при отправке заявки. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert("Ошибка соединения. Проверьте интернет и попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* Если картинки нет, модалка будет просто белой благодаря базовым стилям */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        {/* Рендерим фон только если передан пропс bgImage */}
        {bgImage && (
          <div 
            className={styles.bgImage} 
            style={{ backgroundImage: `url(${bgImage})` }} 
          />
        )}
        
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <div className={styles.content}>
          {/* Меняем заголовок в зависимости от статуса загрузки */}
          <p className={styles.text}>
            {isLoading ? loadingTitle : title}
          </p>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="Имя" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
            <PatternFormat
                format="+7 (###) ###-##-##"
                mask="_"
                name="phone"
                value={phone}
                allowEmptyFormatting={true}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
                autoComplete="tel"
                required
                placeholder=""
            />
            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Отправка...' : 'Оставить заявку'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};