import React, { useEffect } from "react";
import { Badge, Select, TreeSelect } from "antd";
import { Link } from "react-router-dom";

import { cn } from "../service/functions.ts";
import SelectLabel from "./SelectLabel.tsx";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import {
  getFilteredData,
  getModels,
  setFilterQueries,
} from "../service/slices/data.ts";

interface Props {
  className?: string;
}

export const SearchBar: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { filterQueries, metaData, models } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(getModels());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFilteredData({ ...filterQueries, limit: 10 }));
  }, [filterQueries, dispatch]);

  const handleFilterChange = (
    value: string,
    query: "model" | "price" | "year"
  ) => {
    if (value && query) {
      if (query === "model") {
        dispatch(setFilterQueries({ ...filterQueries, model: value }));
      } else if (query === "price") {
        dispatch(
          setFilterQueries({
            ...filterQueries,
            minPrice: +value.split("-")[0] || undefined,
            maxPrice: +value.split("-")[1] || undefined,
          })
        );
      } else if (query === "year") {
        dispatch(
          setFilterQueries({
            ...filterQueries,
            minYear: +value || undefined,
            maxYear: +value || undefined,
          })
        );
      }
    }
  };

  const modelsOptions = models.map((brand) => {
    return {
      title: brand.name,
      value: brand.id,
      children: brand.models[0]
        ? brand.models.map((model) => ({
            title: model.name,
            value: `${model.brand_id}-${model.id}`,
          }))
        : [],
    };
  });

  return (
    <div className={cn("bg-[#e4e9ef] rounded-[20px]", className)}>
      <div className="py-6 px-3">
        <h3 className="text-2xl font-medium">Найти автомобиль</h3>
        <div className="mt-4">
          <div className="h-12 flex items-center justify-start">
            <TreeSelect
              className="w-1/6 h-full font-semibold"
              popupClassName="font-semibold"
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Марка и модель"
              onChange={(value) => {
                handleFilterChange(value, "model");
              }}
              treeData={modelsOptions}
              treeDefaultExpandAll={false}
              showSearch={false}
              allowClear
            />
            <Select
              placeholder="Цена"
              onChange={(e) => handleFilterChange(e, "price")}
              className="font-semibold h-full w-1/6"
              options={[
                {
                  value: "10000-50000",
                  label: <SelectLabel>10 000 - 50 000 сом.</SelectLabel>,
                },
                {
                  value: "50000-100000",
                  label: <SelectLabel>50 000 - 100 000 сом.</SelectLabel>,
                },
                {
                  value: "100000-200000",
                  label: <SelectLabel>100 000 - 200 000 сом.</SelectLabel>,
                },
                {
                  value: "200000-500000",
                  label: <SelectLabel>200 000 - 500 000 сом.</SelectLabel>,
                },
                {
                  value: "500000-1000000",
                  label: <SelectLabel>500 000 - 1 000 000 сом.</SelectLabel>,
                },
              ]}
            />
            <Select
              placeholder="Год выпуска"
              onChange={(e) => handleFilterChange(e, "year")}
              className="font-semibold h-full w-1/6"
              options={[
                {
                  value: "2024",
                  label: <SelectLabel>2024</SelectLabel>,
                },
                {
                  value: "2023",
                  label: <SelectLabel>2023</SelectLabel>,
                },
                {
                  value: "2022",
                  label: <SelectLabel>2022</SelectLabel>,
                },
                {
                  value: "2021",
                  label: <SelectLabel>2021</SelectLabel>,
                },
                {
                  value: "2020",
                  label: <SelectLabel>2020</SelectLabel>,
                },
              ]}
            />
            <Link
              to="/search"
              className="h-full flex items-center justify-center flex-1 bg-[#c2dbf1] text-[#008eff] rounded font-semibold"
            >
              РАСШИРЕННЫЙ ПОИСК
              <Badge dot>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#008eff"
                  className="bi bi-sliders ml-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
                  />
                </svg>
              </Badge>
            </Link>
            <Link
              to="/search"
              className="h-full flex items-center justify-center flex-1 bg-[#008eff] text-white rounded font-semibold text-md"
            >
              ПОКАЗАТЬ {metaData.total_items || 0} ОБЪЯВЛЕНИЙ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
