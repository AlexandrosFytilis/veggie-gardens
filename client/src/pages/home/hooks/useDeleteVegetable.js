import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

export const useDeleteVegetable = () => {
  const { currentUser, fetchVegetables } = useContext(CurrentUserContext);
  console.log(currentUser);

  return useCallback(async (id) => {
    const response = await fetch(`/users/${currentUser.email}/vegetables/${id}`, {
      method: "DELETE",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify()
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    fetchVegetables();
  }, [currentUser.email, fetchVegetables]);
};
