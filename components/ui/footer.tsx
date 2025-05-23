import FacebookIcon from "@/icons/facebook";
import InstagramIcon from "@/icons/instagram";
import YoutubeIcon from "@/icons/youtube";
import { EMAIL, LINKS } from "@/data/links";
import Link from "next/link";
import EmailIcon from "@/icons/email";
import OCFBadge from "../ocf/ocf-badge";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerIcons}>
        <Link href={LINKS.instagram} target="_blank">
          <InstagramIcon />
        </Link>
        <Link href={LINKS.facebook} target="_blank">
          <FacebookIcon />
        </Link>
        <Link href={LINKS.youtube} target="_blank">
          <YoutubeIcon />
        </Link>
        <Link href={`mailto:${EMAIL}`}>
          <EmailIcon />
        </Link>
      </div>
      <div className={styles.footerDisclaimers}>
        <OCFBadge />
        <span>
          We are a student group acting independently of the University of
          California. We take full responsibility for our organization and this
          web site.
        </span>
      </div>
    </footer>
  );
}
