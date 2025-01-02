"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";

const routes = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Compendium",
    link: "/compendium"
  }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      {routes.map((r) =>
        r.link === pathname ? (
          <p key={r.link}>{r.name}</p>
        ) : (
          <Link key={r.link} href={r.link}>
            {r.name}
          </Link>
        )
      )}
    </div>
  );
}
