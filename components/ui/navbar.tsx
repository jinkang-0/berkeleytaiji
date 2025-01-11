"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import { useEffect, useState } from "react";

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
  const [, setScrollPos] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollEvent = () => {
      const curPos = window.scrollY;

      // hide navbar if scrolling down
      setScrollPos((prevPos) => {
        if (prevPos > curPos) {
          setHideNavbar(false);
        } else {
          setHideNavbar(true);
        }

        return curPos;
      });
    };

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${hideNavbar ? styles.hidden : ""}`}>
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
