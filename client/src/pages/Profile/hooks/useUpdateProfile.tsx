import { useCallback, useContext } from "react";
import { User } from "../../../domain/User";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import { DEFAULT_HEADERS } from "../../../general/utils/network";

export const useUpdateProfile = () => {
  const { email, fetchCurrentUser } = useContext(CurrentUserContext);

  return useCallback(async (updatedInfo: Partial<User>) => {
    const response = await fetch(`/users/${email}`, {
      method: "PUT",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(updatedInfo)
    });
    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    await fetchCurrentUser();
  }, [email, fetchCurrentUser]);
};
