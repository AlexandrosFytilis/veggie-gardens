import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

export const useUpdateWateringDate = () => {
  const { currentUser, fetchVegetables } = useContext(CurrentUserContext);

  return useCallback(async (date) => {
    const response = await fetch(`/users/${currentUser.email}`, {
      method: "PUT",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({"lastWateringDay": date})
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    fetchVegetables();
  }, [currentUser.email, fetchVegetables]);
};
