import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../../general/providers/CurrenUserProvider.js";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

export const useLogin = () => {
  const navigate = useNavigate();
  const { persistCurrentUser } = useContext(CurrentUserContext);

  return useCallback(async (loginInfo) => {
    const response = await fetch("/sessions", {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(loginInfo)
    });
    const json = await response.json();
    if (response.ok) {
      persistCurrentUser(json.data);
      navigate("/");
    } else {
      alert(json.message);
    }
  }, [navigate, persistCurrentUser]);
};
