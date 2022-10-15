import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrenUserProvider";
import { DEFAULT_HEADERS } from "../utils/network";

export const useAddFavoriteVegetable = () => {
  const { email, fetchCurrentUser } = useContext(CurrentUserContext);

  return useCallback(async (vegetableName: string) => {
    const response = await fetch(`/users/${email}/favorite-vegetables`, {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({name: vegetableName})
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    fetchCurrentUser();
  }, [email, fetchCurrentUser]);
};
