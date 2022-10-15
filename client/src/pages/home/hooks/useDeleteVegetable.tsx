import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import { DEFAULT_HEADERS } from "../../../general/utils/network";

export const useDeleteVegetable = () => {
  const { email, fetchCurrentUser } = useContext(CurrentUserContext);

  return useCallback(async (id: string) => {
    const response = await fetch(`/users/${email}/vegetables/${id}`, {
      method: "DELETE",
      headers: DEFAULT_HEADERS,
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    fetchCurrentUser();
  }, [email, fetchCurrentUser]);
};
