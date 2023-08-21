"use client";

import { decrementCountAction, incrementCountAction } from "@/app/_action";
import { useState } from "react";

interface CountFormProps {
  count: number;
}

export default function CountForm({ count }: CountFormProps) {
  const [newCount, setNewCount] = useState(count);

  return (
    <form className="flex space-x-5">
      <button
        className={incre_button_classes}
        formAction={async () => {
          const result = await incrementCountAction();
          setNewCount(result);
        }}
      >
        Increment
      </button>
      <p className="text-center text-2xl font-bold my-4">{newCount}</p>
      <button
        className={decre_button_classes}
        formAction={async () => {
          const result = await decrementCountAction();
          setNewCount(result);
        }}
      >
        Decrement
      </button>
    </form>
  );
}

const incre_button_classes =
  "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded";
const decre_button_classes =
  "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded";
