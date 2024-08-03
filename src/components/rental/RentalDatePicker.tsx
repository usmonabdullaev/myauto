import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import type { DatePickerProps } from "antd";

import { calculateDays, cn } from "../../service/functions.ts";

interface Props {
  className?: string;
  setDays: (day: number) => void;
}

export const RentalDatePicker: React.FC<Props> = ({ className, setDays }) => {
  function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  function addOneDayAndFormat(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 30);
    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const year = newDate.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const dateFormat = "DD-MM-YYYY";
  const [dateStart, setDateStart] = useState(formatDate(new Date()));
  const [dateEnd, setDateEnd] = useState(addOneDayAndFormat(new Date()));

  const onChangeDateStart: DatePickerProps["onChange"] = (date, dateString) => {
    if (date?.isValid()) {
      setDateStart(date.format(dateFormat));
    } else {
      setDateStart("");
    }
  };

  const onChangeDateEnd: DatePickerProps["onChange"] = (date, dateString) => {
    if (date?.isValid()) {
      setDateEnd(date.format(dateFormat));
    } else {
      setDateEnd("");
    }
  };

  useEffect(() => {
    if (dateStart && dateEnd) {
      setDays(calculateDays(dateStart, dateEnd));
    } else {
      setDays(0);
    }
  }, [dateStart, dateEnd, setDays]);

  return (
    <div className={cn("", className)}>
      <DatePicker
        className="h-[50px] font-medium"
        popupClassName="font-medium"
        onChange={onChangeDateStart}
        format={dateFormat}
        defaultValue={dayjs(formatDate(new Date()), dateFormat)}
        minDate={dayjs(formatDate(new Date()), dateFormat)}
        maxDate={dayjs(dateEnd, dateFormat)}
        size="large"
      />
      <DatePicker
        className="h-[50px] font-medium"
        onChange={onChangeDateEnd}
        defaultValue={dayjs(addOneDayAndFormat(new Date()), dateFormat)}
        minDate={dayjs(dateStart, dateFormat)}
        format={dateFormat}
        size="large"
      />
    </div>
  );
};
