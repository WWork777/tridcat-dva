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
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
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

  // Функция для закрытия меню
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Функция для переключения меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`${styles.header} ${
        isScrolled && !menuOpen ? styles.scrolled : ""
      } ${menuOpen ? styles.menuOpen : ""}`} // Добавили класс при открытом меню
    >
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

          {/* БУРГЕР - УВЕЛИЧИМ Z-INDEX И ДОБАВИМ КЛАСС ПРИ ОТКРЫТОМ МЕНЮ */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
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
        onClick={closeMenu}
      >
        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.mobileMenuActive : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className={styles.mobile_logo_container}
          >
            <img src="/logo/logo.svg" alt="" className={styles.mobile_logo} />
          </Link>
          <nav>
            <Link href="/#about" onClick={closeMenu}>
              О клинике
            </Link>
            <Link href="/services" onClick={closeMenu}>
              Услуги
            </Link>
            <Link href="/specialists" onClick={closeMenu}>
              Специалисты
            </Link>
            <Link href="/blog" onClick={closeMenu}>
              Блог
            </Link>
            <Link href="/#reviews" onClick={closeMenu}>
              Отзывы
            </Link>
            <Link href="/#contacts" onClick={closeMenu}>
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
                  alt="vkontakte"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://wa.me/79029830005" target="_blank">
                <Image
                  src="/footer/wa.svg"
                  alt="whatsapp"
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