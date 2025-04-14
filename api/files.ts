"use server";

import { serviceAccountAuth } from "@/lib/google";

/**
 * Uploads new image to blog image folder
 *
 * @param file - File object
 */
export async function uploadImage(file: File) {
  // get data
  const form = new FormData();
  form.append(
    "metadata",
    new Blob(
      [
        JSON.stringify({
          name: file.name,
          parents: [process.env.BLOG_FOLDER_ID]
        })
      ],
      { type: "application/json" }
    )
  );
  form.append("file", file);

  // send request
  const accessTokenRes = await serviceAccountAuth.getAccessToken();
  const accessToken = accessTokenRes.token;

  const res = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: form
    }
  );

  if (!res.ok) {
    console.error(await res.json());
  }
}

/**
 * Update image in blog image folder
 *
 * @param file - File object
 * @param fileId - ID of file to update
 */
export async function updateImage(file: File, fileId: string) {
  // get data
  const form = new FormData();
  form.append(
    "metadata",
    new Blob(
      [
        JSON.stringify({
          name: file.name
        })
      ],
      { type: "application/json" }
    )
  );
  form.append("file", file);

  // send request
  const accessTokenRes = await serviceAccountAuth.getAccessToken();
  const accessToken = accessTokenRes.token;

  const res = await fetch(
    `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart&supportsAllDrives=true`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: form
    }
  );

  if (!res.ok) {
    console.error(await res.json());
  }
}

/**
 * Search for a filename in the blog image folder
 *
 * @param filename - filename to search for
 * @returns false - if file is not found
 * @returns fileID - if file is found
 */
export async function searchFiles(filename: string) {
  const accessTokenRes = await serviceAccountAuth.getAccessToken();
  const accessToken = accessTokenRes.token;

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=%27${process.env.BLOG_FOLDER_ID}%27%20in%20parents`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  const data = await res.json();
  const fileList = data.files as Record<string, string>[];
  if (fileList.length === 0) return false;

  const file = fileList.find((f) => f.name === filename);
  if (!file) return false;

  return file.id;
}
