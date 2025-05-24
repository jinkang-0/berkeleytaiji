"use server";

import { serviceAccountAuth } from "@/api/setup/google";

/**
 * Uploads new image to blog image folder
 *
 * @param file - File object
 */
export async function uploadImage(file: File, filename?: string) {
  // get data
  const form = new FormData();
  form.append(
    "metadata",
    new Blob(
      [
        JSON.stringify({
          name: filename || file.name,
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
    console.error(res);
  }

  return res.json();
}

/**
 * Update image in blog image folder
 *
 * @param file - File object
 * @param fileId - ID of file to update
 */
export async function updateImage(
  file: File,
  fileId: string,
  filename?: string
) {
  // get data
  const form = new FormData();
  form.append(
    "metadata",
    new Blob(
      [
        JSON.stringify({
          name: filename || file.name
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
    console.error(res);
  }
}

/**
 * Search for a filename in the blog image folder
 *
 * @param filename - filename to search for
 * @returns list of files with the same name
 */
export async function searchFiles(filename: string) {
  const accessTokenRes = await serviceAccountAuth.getAccessToken();
  const accessToken = accessTokenRes.token;

  const query = `name='${filename}' and '${process.env.BLOG_FOLDER_ID}' in parents`;
  const q = encodeURIComponent(query);

  const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const data = await res.json();
  const fileList = data.files as Record<string, string>[];
  // if (fileList.length === 0) return false;

  // const file = fileList.find((f) => f.name === filename);
  // if (!file) return false;

  return fileList;
}

/**
 * Delete a file from the blog image folder.
 *
 * @param fileId - ID of the file to delete
 * @returns true if the file was deleted, false otherwise
 */
export async function deleteFile(fileId: string) {
  const accessTokenRes = await serviceAccountAuth.getAccessToken();
  const accessToken = accessTokenRes.token;

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files/${fileId}?supportsAllDrives=true`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  if (!res.ok) {
    console.error(res);
    return false;
  }

  return true;
}
