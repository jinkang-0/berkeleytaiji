import NotFoundTemplate from "@/components/templates/not-found";
import styles from "./error.module.scss";
import Footer from "@/components/ui/footer";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <NotFoundTemplate />
      <Footer />
    </main>
  );
}
