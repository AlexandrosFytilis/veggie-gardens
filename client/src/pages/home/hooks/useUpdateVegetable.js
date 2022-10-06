import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

export const useUpdateVegetable = () => {
  const { currentUser, fetchVegetables } = useContext(CurrentUserContext);

  return useCallback(async (vegetable) => {
    const response = await fetch(`/users/${currentUser.email}/vegetables/${vegetable.id}`, {
      method: "PUT",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(vegetable)
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    fetchVegetables();
  }, [currentUser.email, fetchVegetables]);
};
