import { GoogleSpreadsheet } from "google-spreadsheet";
import { serviceAccountAuth } from "./google-auth";

if (!process.env.SPREADSHEET_ID)
  throw new Error("Spreadsheet ID is not specified in environment variables.");

const doc = new GoogleSpreadsheet(
  process.env.SPREADSHEET_ID,
  serviceAccountAuth
);
let initialized: boolean | Promise<void> = false;

const loadDoc = async () => {
  if (initialized) return initialized;
  initialized = doc.loadInfo();
  await initialized;
};
loadDoc();

export const getSheet = async (sheetTitle: string, headerRow = 2) => {
  await loadDoc();
  const sheet = doc.sheetsByTitle[sheetTitle];
  await sheet.loadHeaderRow(headerRow);
  const rows = await sheet.getRows();
  return rows.map((row) => row.toObject());
};

export const getSchedule = async () => {
  return await getSheet("Schedule");
};

export const getEvents = async () => {
  return await getSheet("Events");
};

export const getCompendium = async () => {
  return await getSheet("Compendium");
};

export const getCategories = async () => {
  return await getSheet("Categories");
};

export const getCommunityImages = async () => {
  return await getSheet("Community");
};
