import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Truncate string
 *
 * @param str String
 * @param length Length of string where to truncate
 * @returns String[length]...
 */
export const truncate = (str: string, length: number) => {
  return str.length > length ? `${str.slice(0, length)}...` : str;
};

/**
 * Format number to (000 000)
 *
 * @param num Number
 * @returns String
 */
export const formatNumber = (num: number) => {
  return num.toLocaleString("ru-RU");
};

/**
 * Filter object
 *
 * @param obj Object
 * @returns Object
 */
export const filterObject = (obj: { [key: string]: any }) => {
  const filteredObj: { [key: string]: any } = {};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const key = Object.keys(obj)[i];
    const value = obj[key];
    if (
      value === "" ||
      value === undefined ||
      value === null ||
      (typeof value === "object" && !value.length)
    ) {
      continue;
    }
    filteredObj[key] = value;
  }
  return filteredObj;
};

/**
 * Convert object to query string
 *
 * @param obj Object
 * @returns string
 */
export const objectToQueryString = (obj: { [key: string]: any }) => {
  let queryArray: string[][] = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const key = Object.keys(obj)[i];
    const value = obj[key];
    queryArray.push([key, String(value)]);
  }
  return queryArray.map((i) => i.join("=")).join("&");
};

export const formatDate = (date: Date) => {
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/\//g, ".")
    .replace(", ", " ");
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error("Failed to convert file to base64"));
      }
    };
    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
    reader.readAsDataURL(file);
  });
};

export const filesToBase64 = (files: File[]): Promise<string[]> => {
  return Promise.all(files.map((file) => fileToBase64(file)));
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Calculate the number of days between two dates
 *
 * @param date1 Date start
 * @param date2 Date end
 * @returns days
 */
export const calculateDays = (date1: string, date2: string) => {
  // Разделяем строки на составляющие: день, месяц, год
  const [day1, month1, year1] = date1.split("-").map(Number);
  const [day2, month2, year2] = date2.split("-").map(Number);

  // Создаем объекты Date
  const firstDate = +new Date(year1, month1 - 1, day1);
  const secondDate = +new Date(year2, month2 - 1, day2);

  // Вычисляем разницу в миллисекундах
  const differenceInTime = Math.abs(secondDate - firstDate);

  // Конвертируем миллисекунды в дни
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
};
