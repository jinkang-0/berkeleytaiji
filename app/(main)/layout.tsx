import Hero from "@/components/ui/hero";
import styles from "./page.module.scss";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.container}>
      <Hero />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
