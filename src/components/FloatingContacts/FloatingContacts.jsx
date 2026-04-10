"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FloatingContacts.module.scss";

export default function FloatingContacts() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const links = {
    vk: "https://m.vk.com/tridsat_dva",
    // tg: "https://t.me/stomatologiya_32",
    max: 'https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM',
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

        <a href={links.max} target="_blank" className={styles.item}>
          <MaxIcon />
          <span>Max</span>
        </a>

        {/* <a href={links.tg} target="_blank" className={styles.item}>
          <TgIcon />
          <span>Telegram</span>
        </a> */}

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
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_429_301)">
      <path d="M14.5918 0C20.9205 1.58957e-09 24.102 0.000377226 26.0508 1.96582C27.9995 3.93138 28 7.09617 28 13.4082V14.5918C28 20.905 28.0163 24.0686 26.0508 26.0342C24.0852 27.9996 20.9205 28 14.5918 28H13.4258C7.09555 28 3.93143 27.9998 1.96582 26.0342C0.000277975 24.0686 1.24178e-09 20.905 0 14.5918V13.4082C1.03723e-09 7.09394 0.000273725 3.93138 1.96582 1.96582C3.93143 0.000227303 7.09555 0 13.4258 0H14.5918ZM4.73145 8.52832C4.88041 15.8071 8.71211 20.1874 15.0254 20.1875H15.3916V16.0234C17.6898 16.2564 19.4064 17.9722 20.1064 20.1875H23.4199C22.5205 16.8737 20.1884 15.0418 18.7393 14.3418C20.1885 13.476 22.237 11.3765 22.7197 8.52832H19.7061C19.0722 10.8434 17.1903 12.9422 15.3916 13.1416V8.52832H12.3262V16.6074C10.4614 16.1448 8.02936 13.875 7.92969 8.52832H4.73145Z" fill="currentcolor"/>
      </g>
      <defs>
      <clipPath id="clip0_429_301">
      <rect width="28" height="28" fill="white"/>
      </clipPath>
      </defs>
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

function MaxIcon() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="24pt" height="24pt" viewBox="0 0 320.000000 320.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
      fill="currentColor" stroke="none">
      <path d="M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899
      -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101
      -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110
      294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528
      566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090
      -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71
      552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39
      l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141
      -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300
      -15z"/>
      </g>
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
