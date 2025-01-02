import CONFIG from "@/lib/config";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

const doc = new GoogleSpreadsheet(CONFIG.spreadsheet_id, serviceAccountAuth);
let initialized: boolean | Promise<void> = false;

const loadDoc = async () => {
  if (initialized) return initialized;
  initialized = doc.loadInfo();
  await initialized;
};
loadDoc();

export const getSchedule = async () => {
  await loadDoc();
  const scheduleSheet = doc.sheetsByTitle["Schedule"];
  await scheduleSheet.loadHeaderRow(2);
  const rows = await scheduleSheet.getRows();
  return rows.map((row) => row.toObject());
};

export const getEvents = async () => {
  await loadDoc();
  const eventsSheet = doc.sheetsByTitle["Events"];
  await eventsSheet.loadHeaderRow(2);
  const rows = await eventsSheet.getRows();
  return rows.map((row) => row.toObject());
};

export const getCompendium = async () => {
  await loadDoc();
  const compendiumSheet = doc.sheetsByTitle["Compendium"];
  await compendiumSheet.loadHeaderRow(2);
  const rows = await compendiumSheet.getRows();
  return rows.map((row) => row.toObject());
};

export const getCategories = async () => {
  await loadDoc();
  const categoriesSheet = doc.sheetsByTitle["Categories"];
  await categoriesSheet.loadHeaderRow(2);
  const rows = await categoriesSheet.getRows();
  return rows.map((row) => row.toObject());
};
