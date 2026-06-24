"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { PatternFormat } from "react-number-format";
import styles from "./PromoPopUp.module.scss";

export const PromoPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

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
    const digitsOnly = phone.replace(/\D/g, "");

    // Проверяем, что введено ровно 11 цифр
    if (digitsOnly.length !== 11) {
      alert("Пожалуйста, введите номер телефона полностью.");
      return; // Прерываем выполнение функции, форма не отправляется
    }

    // СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ (152-ФЗ)
    if (!consent) {
      alert("Необходимо дать согласие на обработку персональных данных.");
      return;
    }

    setIsLoading(true);

    const text = `🔥 Новая заявка на скидку 10%!\nИмя: ${name}\nТелефон: ${phone}`;

    const idInstance = "3100517801";
    const apiTokenInstance =
      "4e23b210658549c881680633b93bb11301a0f304a927433da6";

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
        },
      );

      if (maxResponse.ok) {
        console.log("Форма отправлена!");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).ym(105543299, "reachGoal", "PopUpForm");
        alert("Заявка успешно отправлена!");
        setName("");
        setPhone("");
        setConsent(false);
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
            <span>Фиксируем скидку 10% </span> c 1.05 по 1.07 на все визиты с
            момента <span>первого приёма</span> и <span>до конца</span>{" "}
            календарного месяца
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
            <label className={styles.consent}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />
              <span>
                Я даю согласие на обработку{" "}
                <a href="/docs/ПОЛИТИКА ОБРАБОТКИ ПД.pdf" target="_blank" rel="noopener noreferrer">персональных данных</a>{" "}
                и принимаю условия{" "}
                <a href="/docs/ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ.pdf" target="_blank" rel="noopener noreferrer">пользовательского соглашения</a>.
              </span>
            </label>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading || !consent}
            >
              {isLoading ? "Отправка..." : "Забрать скидку"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
