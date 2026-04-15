"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import { PatternFormat } from "react-number-format";
import styles from './PromoPopUp.module.scss';

export const PromoPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ВАЛИДАЦИЯ ТЕЛЕФОНА:
    // Очищаем строку от всего, кроме цифр (останутся только 79001234567)
    const digitsOnly = phone.replace(/\D/g, '');

    // Проверяем, что введено ровно 11 цифр
    if (digitsOnly.length !== 11) {
      alert("Пожалуйста, введите номер телефона полностью.");
      return; // Прерываем выполнение функции, форма не отправляется
    }

    setIsLoading(true);

    const text = `🔥 Новая заявка на скидку 10%!\nИмя: ${name}\nТелефон: ${phone}`;

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
        console.log("Форма отправлена!");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).ym(105543299, "reachGoal", "PopUpForm");
        alert("Заявка успешно отправлена!");
        setName('');
        setPhone('');
        setIsOpen(false);
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
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          &times;
        </button>
        
        <div className={styles.content}>
          <p className={styles.text}>
            Скидка <span>10%</span> на все услуги для тех, кто <span>впервые</span> посетит нашу клинику с 1.04 по 1.05
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
              {isLoading ? 'Отправка...' : 'Забрать скидку'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};