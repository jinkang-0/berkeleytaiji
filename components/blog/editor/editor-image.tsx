"use client";

import { ButtonSecondary } from "@/components/ui/button";
import styles from "./editor-image.module.scss";
import Move from "@/icons/move";
import UploadIcon from "@/icons/upload";
import NextImage from "next/image";
import { useBlogContext } from "../context-blog";
import { useMemo, useState } from "react";
import CancelIcon from "@/icons/cancel";
import Checkmark from "@/icons/checkmark";
import { searchFiles, updateImage, uploadImage } from "@/api/files";
import { gDriveToDownload } from "@/lib/utils";

export default function EditorImage() {
  const { blog, saveBlog, setBlogState } = useBlogContext();
  const [repositioning, setRepositioning] = useState(false);
  const [prevOffset, setPrevOffset] = useState(blog.imageOffset);
  const [imageOffset, setImageOffset] = useState(blog.imageOffset);
  const [prevY, setPrevY] = useState<number | null>(null);
  const [imageSrc, setImageSrc] = useState(blog.image);

  const blankImage = useMemo(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return null;
    const blankImage = new Image(0, 0);
    blankImage.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    return blankImage;
  }, []);

  const handleRepositionStart = () => {
    setRepositioning((prev) => !prev);
  };

  const handleRepositionEnd = (save?: boolean) => {
    setRepositioning(false);

    if (save) {
      setPrevOffset(imageOffset);
      setBlogState((prev) => ({ ...prev, imageOffset }));
      saveBlog({ imageOffset });
    } else {
      setImageOffset(prevOffset);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLImageElement>) => {
    if (prevY === null) {
      setPrevY(e.clientY);
      return;
    }

    // dragging stopped
    if (e.clientX === 0 && e.clientY === 0) {
      return;
    }

    const deltaY = e.clientY - prevY;
    const sensitivity = 0.25;
    const offset = imageOffset - deltaY * sensitivity;
    const clampedOffset = Math.max(0, Math.min(100, offset));
    setImageOffset(clampedOffset);

    setPrevY(e.clientY);
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    // replace ghost image and set empty drag data
    e.dataTransfer.clearData();
    if (blankImage) e.dataTransfer.setDragImage(blankImage, 0, 0);
    e.dataTransfer.setData("text/plain", "");
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    // reset anchor point
    setPrevY(null);
  };

  const handleImageReplace = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      // check if image exists in drive
      const matches = await searchFiles(blog._id);
      let newImageUrl = "";

      if (matches.length > 0) {
        // if it exists, update it
        await updateImage(file, matches[0].id, blog._id);
        const url = gDriveToDownload(matches[0].id);
        const randomNumber = Math.floor(Math.random() * 1000000);
        newImageUrl = `${url}&v=${randomNumber}`;
      } else {
        // if not, upload new image
        const res = await uploadImage(file, blog._id);
        newImageUrl = gDriveToDownload(res.id);
      }

      // update image in blog
      setPrevOffset(0);
      setImageOffset(0);
      setBlogState((prev) => ({
        ...prev,
        image: newImageUrl,
        imageOffset: 0
      }));
      saveBlog({ image: newImageUrl, imageOffset: 0 });
      setImageSrc(newImageUrl);
    };
    input.click();
  };

  return (
    <div className={styles.imageContainer}>
      <NextImage
        src={imageSrc}
        alt={blog.title}
        width="400"
        height="200"
        blurDataURL={imageSrc}
        style={{
          objectPosition: `0% ${imageOffset}%`,
          cursor: repositioning ? "move" : "default"
        }}
        draggable={repositioning}
        onDragStart={(e) => handleDragStart(e)}
        onDrag={(e) => handleDrag(e)}
        onDragEnd={() => handleDragEnd()}
        onDrop={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
      />
      <div className={styles.container}>
        {repositioning ? (
          <>
            <ButtonSecondary onClick={() => handleRepositionEnd(false)}>
              <CancelIcon />
              Cancel
            </ButtonSecondary>
            <ButtonSecondary onClick={() => handleRepositionEnd(true)}>
              <Checkmark />
              Done
            </ButtonSecondary>
          </>
        ) : (
          <>
            <ButtonSecondary onClick={handleRepositionStart}>
              <Move /> Reposition
            </ButtonSecondary>
            <ButtonSecondary onClick={() => handleImageReplace()}>
              <UploadIcon /> Replace
            </ButtonSecondary>
          </>
        )}
      </div>
    </div>
  );
}
