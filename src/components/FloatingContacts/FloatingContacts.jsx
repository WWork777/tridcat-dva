"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FloatingContacts.module.scss";

export default function FloatingContacts() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const links = {
    vk: "https://m.vk.com/tridsat_dva",
    tg: "https://t.me/stomatologiya_32",
    wa: "https://api.whatsapp.com/send/?phone=79029830005&text&type=phone_number&app_absent=0",
    tel: "tel:+7(3842) 33 00 05",
  };

  useEffect(() => {
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onClick);
    return () => document.removeEventListener("pointerdown", onClick);
  }, []);

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <a href={links.vk} target="_blank" className={styles.item}>
          <VkIcon />
          <span>ВК</span>
        </a>

        <a href={links.wa} target="_blank" className={styles.item}>
          <WaIcon />
          <span>WhatsApp</span>
        </a>

        <a href={links.tg} target="_blank" className={styles.item}>
          <TgIcon />
          <span>Telegram</span>
        </a>

        <a href={links.tel} className={styles.item}>
          <PhoneIcon />
          <span>Позвонить</span>
        </a>
      </div>

      <button
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        aria-label="Связаться с нами"
      >
        Связаться с нами
      </button>
    </div>
  );
}

/* ---------- icons ---------- */

function VkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12.784 16.743c-3.862 0-6.07-2.645-6.162-7.043h2.01c.066 3.18 1.463 4.53 2.57 4.81V9.7h1.895v2.74c1.093-.117 2.238-1.35 2.626-2.74h1.895c-.298 1.62-1.547 2.853-2.426 3.36.879.412 2.306 1.48 2.84 3.483h-2.084c-.417-1.32-1.456-2.34-2.85-2.48v2.48z" />
    </svg>
  );
}

function TgIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M9.04 15.56l-.38 5.32c.55 0 .79-.24 1.08-.53l2.59-2.48 5.37 3.92c.99.55 1.69.26 1.94-.91l3.52-16.47c.32-1.47-.53-2.05-1.5-1.68L1.1 9.58c-1.43.55-1.41 1.34-.26 1.69l5.37 1.68L18.96 5.6c.6-.39 1.15-.17.7.22" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.5 1.34 5.02L2 22l5.15-1.35A9.95 9.95 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.83 14.26c-.25.7-1.45 1.35-2 1.41-.5.06-1.14.09-3.67-.78-3.24-1.12-5.32-4.57-5.48-4.78-.16-.2-1.32-1.76-1.32-3.35 0-1.6.84-2.39 1.14-2.72.3-.32.65-.4.87-.4h.63c.2 0 .46-.08.72.55.26.64.89 2.19.97 2.35.08.16.13.34.02.54-.11.2-.16.32-.32.5-.16.18-.34.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.6 1.6.32.16.5.14.69-.08.2-.22.8-.94 1.01-1.26.21-.32.43-.26.72-.16.29.1 1.84.87 2.16 1.03.32.16.53.24.61.37.08.13.08.74-.17 1.44z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
