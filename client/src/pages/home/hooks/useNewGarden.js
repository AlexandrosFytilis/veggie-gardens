import { useCallback } from "react";
import { DEFAULT_HEADERS } from "../../../general/utils/network.js";

const useNewGarden = () => {
  return useCallback(async () => {
    const response = await fetch("/gardens", {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({
        data: "nothing"
      })
    });
    const json = await response.json();
    console.log(json.data);
    // const secondResponse = await fetch("/gardens", {
    //   method: "POST",
    //   headers: DEFAULT_HEADERS,
    //   body: JSON.stringify({
    //     data: "nothing"
    //   })
    // });


  }, []);
};

export default useNewGarden;
