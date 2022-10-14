import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import { DEFAULT_HEADERS } from "../../../general/utils/network";

export const useDeleteVegetable = () => {
  const { currentUser, fetchCurrentUser } = useContext(CurrentUserContext);

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
    fetchCurrentUser();
  }, [currentUser.email, fetchCurrentUser]);
};
