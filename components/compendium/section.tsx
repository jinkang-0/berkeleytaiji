import { Form } from "@/lib/types";
import Gallery from "./gallery";

interface CompendiumSectionProps {
  name: string;
  description: string;
  forms: Form[];
}

export default function CompendiumSection({
  name,
  description,
  forms
}: CompendiumSectionProps) {
  return (
    <section>
      <h5>{name}</h5>
      <p>{description}</p>
      {forms.length > 0 && <Gallery forms={forms} />}
    </section>
  );
}
