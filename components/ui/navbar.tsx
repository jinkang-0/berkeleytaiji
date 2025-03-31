"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { NAVBAR_LINKS } from "@/data/links";
import { useMemo } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const activeIdx = useMemo(
    () => NAVBAR_LINKS.findIndex((v) => v.href === pathname),
    [pathname]
  );

  return (
    <nav className={styles.navbar}>
      {NAVBAR_LINKS.map((n, idx) => (
        <Link
          key={n.href}
          href={n.href}
          className={activeIdx === idx ? styles.active : ""}
        >
          {n.name}
        </Link>
      ))}
      <div className={styles.shifter}>
        <div className={`${styles.divider} i${activeIdx}`}></div>
      </div>
    </nav>
  );
}
