import { useCallback } from "react";
import { useUpdateVegetable } from "./useUpdateVegetable";
export const usePlantVegetable = () => {
    const updateVegetable = useUpdateVegetable();
    return useCallback(async (vegetable, date) => {
        vegetable.datePlanted = date;
        updateVegetable(vegetable);
    }, [updateVegetable]);
};
