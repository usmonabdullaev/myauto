export interface ProductType {
  id: number;
  tarif: "free" | "premium";
  views: number;
  city: string;
  title: string;
  year: number;
  price: number;
  credit: number;
  characteristics: {
    color: {
      hex: string;
      name: string;
    };
    bargain: boolean;
    mileage: number;
    exchange: boolean;
    fuelType: string;
    saddened: boolean;
    driveUnit: string;
    gasEquipment: boolean;
    transmission: string;
    engineCapacity: number;
  };
  description: string;
  model: string;
  created: string;
  updated: string;
  user_id: number;
  user: {
    id: number;
    user_name: string;
    phone: string;
    avatar: string;
  };
  images: { image: string; id: string; main: boolean; car_id: number }[];
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
  cars: ProductType[];
  user: {
    id: number;
    user_name: string;
    phone: string;
    balance: number;
    avatar: string;
  };
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
  similar: ProductType[];
  similarLoading: boolean;
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
