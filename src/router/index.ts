import { lazy } from "react";

export const Layout = lazy(() => import("../containers/Layout.tsx"));

export const Main = lazy(() => import("../pages/Main.tsx"));

export const Search = lazy(() => import("../pages/Search.tsx"));

export const Product = lazy(() => import("../pages/Product.tsx"));

export const UserInfo = lazy(() => import("../pages/UserInfo.tsx"));

export const CarComparison = lazy(() => import("../pages/CarComparison.tsx"));

export const BuyOnline = lazy(() => import("../pages/BuyOnline.tsx"));
