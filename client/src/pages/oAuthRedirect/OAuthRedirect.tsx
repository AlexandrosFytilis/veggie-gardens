import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider";
import { DEFAULT_HEADERS } from "../../general/utils/network";

export const OAuthRedirect = () => {
  const navigate = useNavigate();
  const { persistCurrentUser } = useContext(CurrentUserContext);
  const [ searchParams ] = useSearchParams();
  const access_token = searchParams.get("access_token");

  useEffect(() => {
    const login = async () => {
      const response = await fetch("/sessions", {
        method: "POST",
        headers: DEFAULT_HEADERS,
        body: JSON.stringify({ access_token })
      });
      const json = await response.json();
      if (response.ok) {
        persistCurrentUser(json.data);
        navigate("/");
      } else {
        navigate("/login");
      }
    };

    login();
  }, [access_token, navigate, persistCurrentUser]);

  return null;
};
