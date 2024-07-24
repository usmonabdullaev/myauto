import { lazy } from "react";

export const Layout = lazy(() => import("../containers/Layout.tsx"));

export const Main = lazy(() => import("../pages/Main.tsx"));

export const Search = lazy(() => import("../pages/Search.tsx"));

export const Product = lazy(() => import("../pages/Product.tsx"));

export const UserInfo = lazy(() => import("../pages/UserInfo.tsx"));

export const CarComparison = lazy(() => import("../pages/CarComparison.tsx"));

export const BuyOnline = lazy(() => import("../pages/BuyOnline.tsx"));

export const BuyOnlineParams = lazy(
  () => import("../pages/BuyOnlineParams.tsx")
);

export const DealersCars = lazy(() => import("../pages/dealer/Cars.tsx"));

export const DealersCar = lazy(() => import("../pages/dealer/Car.tsx"));

export const Dealer = lazy(() => import("../pages/dealer/Dealer.tsx"));

export const CarLoans = lazy(() => import("../pages/CarLoans.tsx"));

export const CarLeasing = lazy(() => import("../pages/CarLeasing.tsx"));

export const CarInsurance = lazy(() => import("../pages/CarInsurance.tsx"));

export const CheckingFines = lazy(() => import("../pages/CheckingFines.tsx"));

export const OnlineOrdering = lazy(() => import("../pages/OnlineOrdering.tsx"));

export const WeBuyCars = lazy(() => import("../pages/WeBuyCars.tsx"));

export const Rental = lazy(() => import("../pages/Rental.tsx"));
