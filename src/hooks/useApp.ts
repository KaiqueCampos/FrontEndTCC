import { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";

export function useApp() {
    const value = useContext(AppContext)
    return value
}