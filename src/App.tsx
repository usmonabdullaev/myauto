import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Main,
  Layout,
  Search,
  Product,
  UserInfo,
  CarComparison,
  BuyOnline,
  BuyOnlineParams,
  DealersCars,
  DealersCar,
  Dealer,
  CarLoans,
  CarLeasing,
  CarInsurance,
  CheckingFines,
  OnlineOrdering,
  WeBuyCars,
  Rental,
  RentalPage,
  CarsFromDubai,
} from "./router/index.ts";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Layout />
          </Suspense>
        }
      >
        <Route
          element={
            <Suspense>
              <Main />
            </Suspense>
          }
          index
        />
        <Route
          path="search"
          element={
            <Suspense>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="product/:id"
          element={
            <Suspense>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="user/:id"
          element={
            <Suspense>
              <UserInfo />
            </Suspense>
          }
        />
        <Route
          path="car-comparison"
          element={
            <Suspense>
              <CarComparison />
            </Suspense>
          }
        />
        <Route
          path="buy-online"
          element={
            <Suspense>
              <BuyOnline />
            </Suspense>
          }
        />
        <Route
          path="buy-online/:brand/:model"
          element={
            <Suspense>
              <BuyOnlineParams />
            </Suspense>
          }
        />
        <Route
          path="dealers/cars"
          element={
            <Suspense>
              <DealersCars />
            </Suspense>
          }
        />
        <Route
          path="dealers/car/:id"
          element={
            <Suspense>
              <DealersCar />
            </Suspense>
          }
        />
        <Route
          path="dealer/:id"
          element={
            <Suspense>
              <Dealer />
            </Suspense>
          }
        />
        <Route
          path="car-loans"
          element={
            <Suspense>
              <CarLoans />
            </Suspense>
          }
        />
        <Route
          path="car-leasing"
          element={
            <Suspense>
              <CarLeasing />
            </Suspense>
          }
        />
        <Route
          path="car-insurance"
          element={
            <Suspense>
              <CarInsurance />
            </Suspense>
          }
        />
        <Route
          path="checking-fines"
          element={
            <Suspense>
              <CheckingFines />
            </Suspense>
          }
        />
        <Route
          path="online-ordering"
          element={
            <Suspense>
              <OnlineOrdering />
            </Suspense>
          }
        />
        <Route
          path="we-buy-cars"
          element={
            <Suspense>
              <WeBuyCars />
            </Suspense>
          }
        />
        <Route
          path="rental"
          element={
            <Suspense>
              <Rental />
            </Suspense>
          }
        />
        <Route
          path="rental/:id"
          element={
            <Suspense>
              <RentalPage />
            </Suspense>
          }
        />
        <Route
          path="cars-from-dubai"
          element={
            <Suspense>
              <CarsFromDubai />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
