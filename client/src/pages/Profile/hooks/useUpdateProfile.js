import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

export const useUpdateProfile = () => {
  const { currentUser, fetchCurrentUser } = useContext(CurrentUserContext);

  return useCallback(async (updatedInfo) => {
    const response = await fetch(`/users/${currentUser.email}`, {
      method: "PUT",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(updatedInfo)
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    fetchCurrentUser();
  }, [currentUser.email, fetchCurrentUser]);
};
