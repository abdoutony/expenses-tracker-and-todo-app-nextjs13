import { SelectData } from "@/types";
import React from "react";
type Props = {
  defaultSelectText: string;
  options: SelectData[];
  register?: any;
  label: string;
};
export default function FormSelect({
  defaultSelectText,
  options,
  register,
  label,
}: Props) {
  return (
    <select
      {...register(label)}
      className="py-3 px-4 pr-9 
      
      block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
    >
      <option defaultValue="" disabled>
        {defaultSelectText}
      </option>
      {options &&
        options.map((el) => (
          <option key={el.id} value={el.value}>
            {el.text}
          </option>
        ))}
    </select>
  );
}
