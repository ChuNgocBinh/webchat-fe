import { useContext } from "react";
import { Store } from "./context/store";

const useValueContext = () => {
    const [state, dispatch] = useContext(Store)
    return [state, dispatch]
}

export default useValueContext;