"use client";

import Image from "next/image";
import { Dialog, VisuallyHidden } from "radix-ui";
import CancelIcon from "@/icons/cancel";
import { useRouter, useSearchParams } from "next/navigation";
import { compendiumIndex } from "@/data/compendium";
import { useMemo } from "react";
import styles from "./content.module.scss";
import { useCompendiumContext } from "./compendium-context";

export default function CompendiumDialog({
  children
}: {
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { dialogOpenedNaturally, setDialogOpenedNaturally } =
    useCompendiumContext();

  const selectedItem = useMemo(() => compendiumIndex[id || ""] || null, [id]);
  const tags = useMemo(
    () =>
      selectedItem ? [selectedItem.category, ...selectedItem.otherNames] : [],
    [selectedItem]
  );

  const goBack = () => {
    if (dialogOpenedNaturally) {
      router.back();
      setDialogOpenedNaturally(false);
    } else {
      router.replace("/compendium");
    }
  };

  return (
    <Dialog.Root
      open={!!selectedItem}
      onOpenChange={(open) => {
        if (!open) goBack();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay}>
          <Dialog.Content className={styles.dialogContent}>
            {/* metadata */}
            <VisuallyHidden.Root>
              <Dialog.Title>{selectedItem?.title}</Dialog.Title>
              <Dialog.Description>
                {selectedItem?.description}
              </Dialog.Description>
            </VisuallyHidden.Root>
            {selectedItem ? (
              <div className={styles.dialogMain}>
                {/* close button */}
                <button
                  onClick={() => goBack()}
                  className={styles.dialogCloseButton}
                >
                  <CancelIcon />
                </button>
                {/* main content */}
                <main>
                  <header>
                    <Image
                      src={selectedItem.image}
                      alt={`${selectedItem.title} cover`}
                      width={800}
                      height={450}
                    />
                    <h3>{selectedItem.title}</h3>
                    {tags.length > 0 && (
                      <div className={styles.tags}>
                        {tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className={styles.description}>
                      {selectedItem.description}
                    </p>
                  </header>
                  {children}
                </main>
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
