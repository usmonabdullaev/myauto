export interface ProductType {
  _id: string;
  tarif: "free" | "premium";
  title: string;
  description: string;
  price: number;
  year: number;
  phone: string;
  probeg: number;
  obyom: number;
  korobka: string;
  privod: string;
  rastamojen: string;
  images: { imageUrl: string; _id: string }[];
  credit: number;
  characteristics: {
    mileage: number;
    color: {
      hex: string;
      name: string;
    };
    transmission: string;
    driveUnit: string;
    engineCapacity: number;
    fuelType: string;
  };
  city: string;
  views: number;
  created: string;
  updated: string;
  createdAt: string;
  updatedAt: string;
  authorPhone: string;
  authorName: string;
  model: string;
}

export interface MetaResponseType {
  total_items: number;
  total_pages: number;
}

export interface FilterQueriesType {
  page: number;
  sortBy: "date" | "price";
  city: string;
  model: string;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  credit: boolean;
  minYear: number | undefined;
  maxYear: number | undefined;
  mileage: number | undefined;
  saddened: boolean;
  transmission: string[];
  gasEquipment: boolean;
  fuelType: string[];
  bargain: boolean;
  exchange: boolean;
  colors: string[];
}

export interface FilterQueriesToUrlType {
  page?: number;
  sortBy?: "date" | "price";
  city?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  credit?: boolean;
  minYear?: number;
  maxYear?: number;
  mileage?: number;
  saddened?: boolean;
  transmission?: string[];
  gasEquipment?: boolean;
  fuelType?: string[];
  bargain?: boolean;
  exchange?: boolean;
  limit: number;
}

export type UserInfoType = {
  ads: ProductType[];
  avatarUrl?: string;
  fullName: string;
  phoneNumber: string;
};

export interface DataInitType {
  data: ProductType[];
  dataLoading: boolean;
  premiumData: ProductType[];
  premiumDataLoading: boolean;
  searchCar: ProductType[];
  searchCarLoading: boolean;
  newData: ProductType[];
  newDataLoading: boolean;
  electData: ProductType[];
  electDataLoading: boolean;
  filteredData: ProductType[];
  filteredDataLoading: boolean;
  metaData: MetaResponseType;
  filterQueries: FilterQueriesType;
  singleData: ProductType | null;
  singleDataLoading: boolean;
  userInfo: UserInfoType | null;
  userInfoLoading: boolean;
  comparisonData: ProductType[] | null;
  comparisonDataLoading: boolean;
}
