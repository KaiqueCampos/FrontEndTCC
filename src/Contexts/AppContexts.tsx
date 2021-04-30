import { createContext, ReactNode, useContext, useState } from 'react';
import moment from "moment";
import { daysOfWeek } from '../utils/daysOfWeek';
import MedicineDay from '../pages/MedicineDay';

type AppContextData = {
    medicineDayNotification: () => void;
    getAllMedicinesOfDay: (props: object) => Number;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

    // variables
    const [medicinesToday, setMedicinesToday] = useState([])

    function medicineDayNotification(){
        console.log("funfou");
    }

    function getAllMedicinesOfDay(props){

        // Variables
        const days = daysOfWeek();
        const currentDay = moment().format("YYYY-MM-DD");

        // Get medicines of today
        const indexOf = days.indexOf(currentDay);
        setMedicinesToday(props[indexOf])
        
        return indexOf;
    }


    return (
        <AppContext.Provider
            value={{
                medicineDayNotification,
                getAllMedicinesOfDay,
            }}>

            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    return useContext(AppContext);
}