import { getCategories, getCompendium } from "@/api/spreadsheet";
import CompendiumSection from "@/components/compendium/section";
import { Form } from "@/lib/types";
import { toBool } from "@/lib/utils";
import styles from "./page.module.scss";

export default async function Page() {
  const [categories, compendiumForms] = await Promise.all([
    getCategories(),
    getCompendium()
  ]);

  const compendium: Record<string, Form[]> = {};
  for (const form of compendiumForms) {
    const formCategories = form.Categories.split(",").map((k: string) =>
      k.trim().toUpperCase()
    );
    for (const category of formCategories) {
      const formObj = {
        name: form.Name,
        chinese: form["Chinese Name"],
        link: form.Link
      };
      try {
        compendium[category].push(formObj);
      } catch {
        compendium[category] = [formObj];
      }
    }
  }

  return (
    <main className={styles.container}>
      <article>
        {categories.map(
          (category) =>
            toBool(category.Visible) && (
              <CompendiumSection
                key={category.Key}
                name={category.Name}
                description={category.Description}
                forms={compendium[category.Key] || []}
              />
            )
        )}
      </article>
    </main>
  );
}
