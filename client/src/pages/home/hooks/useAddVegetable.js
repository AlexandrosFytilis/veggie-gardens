import { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import { DEFAULT_HEADERS } from "../../../general/utils/network";
export const useAddVegetable = () => {
    const { currentUser, fetchCurrentUser } = useContext(CurrentUserContext);
    return useCallback(async (vegetable) => {
        const response = await fetch(`/users/${currentUser.email}/vegetables`, {
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
    }, [currentUser.email, fetchCurrentUser]);
};
