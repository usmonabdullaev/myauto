import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const truncate = (str: string, length: number) => {
  return str.length > length ? `${str.slice(0, length)}...` : str;
};

export const formatNumber = (num: number) => {
  return num.toLocaleString("ru-RU");
};

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
