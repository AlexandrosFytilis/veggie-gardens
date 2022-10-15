import { useCallback, useContext } from "react";
import { Vegetable } from "../../../domain/Vegetable";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import { DEFAULT_HEADERS } from "../../../general/utils/network";

export const useAddVegetable = () => {
  const { email, fetchCurrentUser } = useContext(CurrentUserContext);

  return useCallback(async (vegetable: Vegetable) => {
    const response = await fetch(`/users/${email}/vegetables`, {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(vegetable)
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    fetchCurrentUser();
  }, [email, fetchCurrentUser]);
};
