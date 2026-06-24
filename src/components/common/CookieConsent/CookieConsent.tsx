"use client";

import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.scss";

const STORAGE_KEY = "cookie_consent_accepted";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage недоступен — просто закрываем баннер
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite">
      <p className={styles.text}>
        Мы используем файлы cookie и сервисы веб-аналитики для улучшения работы
        сайта. Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
        <a href="/docs/ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ.pdf" target="_blank" rel="noopener noreferrer">
          политикой конфиденциальности
        </a>{" "}
        и{" "}
        <a href="/docs/ПОЛИТИКА ОБРАБОТКИ ПД.pdf" target="_blank" rel="noopener noreferrer">
          политикой обработки персональных данных
        </a>
        .
      </p>
      <button className={styles.button} onClick={accept}>
        Принять
      </button>
    </div>
  );
}
