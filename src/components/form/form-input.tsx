import React from "react";
type Props = {
  type: string;
  placeholder: string;
  handleChange?: (e: string) => void;
  register?: any;
  label?: string;
  value?: string;
  labelText?: string;
  continerClasses?: string;
};

export default function FormInput({
  type,
  placeholder,
  handleChange,
  register,
  label,
  value,
  labelText,
  continerClasses,
}: Props) {
  return (
    <div className={`form-group mt-3 ${continerClasses}`}>
      <label
        htmlFor="input-label"
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        {labelText}
      </label>
      <input
        type={type}
        className="py-3 px-4 border block w-full
                   border-gray-200 rounded-md text-sm
                    focus:border-blue-500 focus:ring-blue-500
                     dark:bg-slate-900 dark:border-gray-700
                   dark:text-gray-400"
        placeholder={placeholder}
        // onChange={(e) => handleChange(e.target.value)}
        {...register(label)}
        value={value}
      />
    </div>
  );
}
