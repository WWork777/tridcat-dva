"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Фон появляется когда страница прокручена больше чем на 50px
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка при размонтировании
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${
        isScrolled && !menuOpen ? styles.scrolled : ""
      }`}
    >
      {/* Остальной код без изменений */}
      <div>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo/logo.svg"
              alt="Логотип"
              width={220}
              height={60}
              priority
            />
          </Link>

          {/* Навигация desktop */}
          <nav className={styles.nav}>
            <Link href="/#about">О клинике</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/specialists">Специалисты</Link>
            {/* <a href="#sales">Акции</a> */}
            <Link href="/#reviews">Отзывы</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/#contacts">Контакты</Link>
          </nav>

          {/* Контакты и кнопка */}
          <div className={styles.actions}>
            <div className={styles.contacts}>
              <a href="tel:+7 902 983 0005" className={styles.phone}>
                +7 902 983 0005
              </a>
              <div
                style={{
                  backgroundColor: "black",
                  height: "20px",
                  width: "1.3px",
                }}
              ></div>
              <a href="tel:+7(3842) 58 30 26" className={styles.phone}>
                +7(3842) 58 30 26
              </a>
              <div className={styles.socials}>
                <Link href="https://m.vk.com/tridsat_dva" target="_blank">
                  <Image
                    src="/socials/vk.svg"
                    alt="VK"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://wa.me/79029830005" target="_blank">
                  <Image
                    src="/socials/wa.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* Мобильное меню */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          menuOpen ? styles.mobileMenuOverlayActive : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.mobileMenuActive : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={styles.mobile_logo_container}
          >
            <img src="/logo/logo.svg" alt="" className={styles.mobile_logo} />
          </Link>
          <nav>
            <Link href="/#about" onClick={() => setMenuOpen(false)}>
              О клинике
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Услуги
            </Link>
            <Link href="/specialists" onClick={() => setMenuOpen(false)}>
              Специалисты
            </Link>
            {/* <Link href="#sales" onClick={() => setMenuOpen(false)}>
              Акции
            </Link> */}
            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              Блог
            </Link>
            <Link href="/#reviews" onClick={() => setMenuOpen(false)}>
              Отзывы
            </Link>
            <Link href="/#contacts" onClick={() => setMenuOpen(false)}>
              Контакты
            </Link>
          </nav>
          <div className={styles.mobileContacts}>
            <Link href="tel:+7 902 983 0005">
              <span>+7 902 983 0005</span>
            </Link>
            <Link href="tel:+7(3842) 58 30 26">
              <span>+7(3842) 58 30 26</span>
            </Link>
            <div className={styles.socials}>
              <Link href="https://m.vk.com/tridsat_dva" target="_blank">
                <Image
                  src="/footer/vk.svg"
                  alt="whatsapp"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://wa.me/79029830005" target="_blank">
                <Image
                  src="/footer/wa.svg"
                  alt="telegram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
