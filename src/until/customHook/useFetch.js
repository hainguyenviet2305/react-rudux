import axios from "axios";
import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [dataCommon, setDataCommon] = useState(null);

  useEffect(() => {
    return () => axios.get(url).then((res) => setDataCommon(res));
  }, [url]);

  return dataCommon;
};

export default useFetchApi;
