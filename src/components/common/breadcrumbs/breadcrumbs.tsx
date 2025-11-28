import styles from "./styles.module.scss";
import Link from "next/link";

interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbsProps {
  items: BreadCrumbItem[];
  separator?: string;
  className?: string;
}

export default function BreadCrumbs({
  items,
  separator = "/",
  className = "",
}: BreadCrumbsProps) {
  return (
    <nav
      className={`${styles.breadcrumbs} ${className}`}
      aria-label="Хлебные крошки"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className={styles.breadcrumbItem}>
            {!isLast && item.href ? (
              <>
                <Link href={item.href} className={styles.link}>
                  <span>{item.label}</span>
                </Link>
                <span className={styles.separator}>{separator}</span>
              </>
            ) : (
              <span className={styles.currentPage} aria-current="page">
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
