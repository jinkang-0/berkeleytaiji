import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Book from "@/assets/hero_images/book.jpg";

export default function Page() {
  return (
    <main>
      <Hero image={Book} />
      <Navbar />
    </main>
  );
}
