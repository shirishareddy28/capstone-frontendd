import { useContext } from "react";
import { GlobalData } from "./GlobalData";

// custom hook for global context data
export function useLoader() {
  return useContext(GlobalData);
}
