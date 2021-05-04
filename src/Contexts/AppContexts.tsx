import moment from "moment";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from 'react';
import { daysOfWeek } from '../utils/daysOfWeek';

type AppContextData = {
    medicinesToday: Array<Object>
    setPlayingState: (state: boolean) => void
    medicineDayNotification: () => void;
    getAllMedicinesOfDay: (props: Array<Object>) => Number;
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

    // variables
    const [medicinesToday, setMedicinesToday] = useState([]);
    const router = useRouter();
    console.log(medicinesToday)

    // Functions
    function medicineDayNotification() {

        function check() {
            var time = moment(Date.now()).format("HH:mm")
            // console.log(time)

            for (var i = 0; i < medicinesToday.length; i++) {
                if (time === medicinesToday[i].time && medicinesToday[i].status === 2) {
                    router.push(`/Status/${medicinesToday[i].id}&${medicinesToday[i].name}&${medicinesToday[i].time}`);
                }
            }
        };

        setInterval(check, 1000 * 60);
    }

    // Verify in each minute if has medicines to taken
    medicineDayNotification();

    // true -> play audio | false -> stop audio
    function setPlayingState(state: boolean) {
        return;
    }

    function getAllMedicinesOfDay(props) {

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
                medicinesToday,
                setPlayingState,
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