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
    if (value === "" || value === undefined || value === null) {
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
