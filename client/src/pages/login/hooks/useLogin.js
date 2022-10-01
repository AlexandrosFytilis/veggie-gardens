import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

export const useLogin = () => {
  const navigate = useNavigate();

  return useCallback(async (loginInfo) => {
    const response = await fetch("/sessions", {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(loginInfo)
    });
    const json = await response.json();
    if (response.ok) {
      // save in context
      navigate("/");
    } else {
      alert(json.message);
    }
  }, [navigate]);
};
