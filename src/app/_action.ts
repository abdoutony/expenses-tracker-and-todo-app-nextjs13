"use server";

import { decrementAsync, incrementAsync } from "@/lib/counter";

export const incrementCountAction = async () => {
  const count = await incrementAsync();
  return count;
};

export const decrementCountAction = async () => {
  const count = await decrementAsync();
  return count;
};
