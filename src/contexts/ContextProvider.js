import {createContext, useContext, useState} from "react";

const StateContext = createContext();


export const ContextProvider = ({children}) => {

    const [brand, setBrand] = useState(false);
    const [cpu, setCpu] = useState(false);
    const [gpu, setGpu] = useState(false);


    return (
    <StateContext.Provider
        value={{
            brand,
            setBrand,
            cpu,
            setCpu,
            gpu,
            setGpu
        }}
    >
        {children}
    </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);