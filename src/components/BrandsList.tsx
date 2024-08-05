import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { cn } from "../service/functions.ts";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import { getModels } from "../service/slices/data.ts";

interface Props {
  className?: string;
}

export const BrandsList: React.FC<Props> = ({ className }) => {
  const { models } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getModels());
  }, [dispatch]);

  return (
    <div className={cn("", className)}>
      <div>
        <h3 className="font-bold text-[#6b747f]">ПОПУЛЯРНЫЕ АВТО</h3>
        <div className="grid grid-cols-6 gap-5 text-[#6b747f] mt-5">
          {models.slice(0, 24).map((i) => (
            <Link key={i.id} to={`#${i.id}`}>
              {i.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
