export interface ProductType {
  _id: string;
  title: string;
  description: string;
  price: string;
  year: string;
  phone: string;
  probeg: number;
  obyom: number;
  korobka: string;
  privod: string;
  rastamojen: string;
  color: string;
  domen: string;
}

export interface MetaResponseType {
  total_items?: number;
  total_pages?: number;
  current_page?: number;
  per_page?: number;
  remaining_count?: number;
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
  mileage: number;
  saddened: boolean;
  transmission: string[];
  gasEquipment: boolean;
  fuelType: string[];
  bargain: boolean;
  exchange: boolean;
}

export interface FilterQueriesToUrlType {
  page?: number;
  sortBy?: "date" | "price";
  city?: string;
  model?: string;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  credit?: boolean;
  minYear?: number | undefined;
  maxYear?: number | undefined;
  mileage?: number;
  saddened?: boolean;
  transmission?: string[];
  gasEquipment?: boolean;
  fuelType?: string[];
  bargain?: boolean;
  exchange?: boolean;
  limit?: number;
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
  filteredData: ProductType[];
  filteredDataLoading: boolean;
  metaQuery: MetaResponseType;
  filterQueries: FilterQueriesType;
  gridType: "grid" | "line";
  singleData: ProductType | null;
  singleDataLoading: boolean;
  userInfo: UserInfoType | null;
  userInfoLoading: boolean;
  comparisonData: ProductType[] | null;
  comparisonDataLoading: boolean;
}
