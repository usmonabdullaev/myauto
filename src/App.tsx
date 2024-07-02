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
          path="user-info/:id"
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
      </Route>
    </Routes>
  );
}

export default App;
