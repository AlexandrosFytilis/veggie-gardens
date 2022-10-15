import { useCallback } from "react";
import { Vegetable } from "../../../domain/Vegetable";
import { useUpdateVegetable } from "./useUpdateVegetable";

export const usePlantVegetable = () => {
  const updateVegetable = useUpdateVegetable();

  return useCallback(async (vegetable: Vegetable, date: string) => {
    vegetable.datePlanted = date;

    updateVegetable(vegetable);
  }, [updateVegetable]);
};
