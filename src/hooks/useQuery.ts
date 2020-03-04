import { useLocation } from "react-router-dom";

type KeyValue = {[key: string]: string};

const useQuery = (): KeyValue => {
  const searchParams = new URLSearchParams(useLocation().search);
  const values: KeyValue = {};
  searchParams.forEach(((value, key) => {
    values[key] = value;
  }));
  return values;
};

export default useQuery;
