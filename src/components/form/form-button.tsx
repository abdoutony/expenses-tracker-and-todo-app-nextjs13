import React from "react";
type Props = {
  type: "button" | "submit" | "reset" | undefined;
  isLoading: boolean;
  className: string;
  disabled: boolean;
  text: string;
};
export default function FormButton({
  type,
  isLoading,
  className,
  disabled,
  text,
}: Props) {
  return (
    <button
      type={type}
      className={`${className} flex
      items-center
      justify-center
      font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
       focus:outline-none
     w-full`}
      disabled={disabled}
    >
      <p>
        <span
          className={
            !isLoading
              ? "hidden "
              : ` animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full
          mx-2`
          }
          role="status"
          aria-label="loading"
        ></span>
        {text}
      </p>
    </button>
  );
}
