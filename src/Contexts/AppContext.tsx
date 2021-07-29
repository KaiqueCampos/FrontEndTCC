import moment from "moment";
import { useRouter } from "next/router";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { daysOfWeek } from '../utils/daysOfWeek';

type FirstAidData = {
    id: number;
    name: string;
    procedure: string;
    videoLink: string;
    thumbnail: string
}

type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

type UserInformation = {
    adress: String,
    age: Number,
    cep: String,
    chronicDisease: String,
    height: String,
    phoneNumber: String,
    weight: String,
}

type AppContextData = {
    firstAid : FirstAidData;
    medicineToBeTaken: MedicinesData;
    medicinesToday: Array<Object>
    userInformation: UserInformation;
    medicineDayNotification: () => void;
    getAllMedicinesOfDay: (props: MedicinesData) => Number;
    getUserInformation: (props: Array<Object>) => void;
    setFirstAidData: (props: FirstAidData) => void
}

export const AppContext = createContext({} as AppContextData);

type AppContextProviderProps = {
    children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

    // variables
    const [firstAid, setFirstAid] = useState();
    const [medicinesToday, setMedicinesToday] = useState([]);
    const [userInformation, setUserInformation] = useState();
    const [medicineToBeTaken, setMedicineToBeTaken] = useState<MedicinesData>()
    const router = useRouter();

    // Functions
    function medicineDayNotification() {
        var time = moment(Date.now()).format("HH:mm");

        for (var i = 0; i < medicinesToday.length; i++) {
            if ( medicinesToday[i].status === 2 && medicinesToday[i].time === time) {
                setMedicineToBeTaken(medicinesToday[i])
                router.push('/MedicineToBeTaken');
            }
        }
    };

    // Verify in each minute if has medicines to taken
    setInterval(medicineDayNotification, 1000 * 60);

    function getAllMedicinesOfDay(props: MedicinesData) {

        // Variables
        const days = daysOfWeek();
        const currentDay = moment().format("YYYY-MM-DD");

        // Get medicines of today
        const indexOf = days.indexOf(currentDay);
        setMedicinesToday(props[indexOf])

        return indexOf;
    }

    function getUserInformation(props) {
        setUserInformation(props);
    }

    function setFirstAidData(props){
        setFirstAid(props)
    }

    return (
        <AppContext.Provider
            value={{
                firstAid,
                medicineToBeTaken,
                userInformation,
                medicinesToday,
                getUserInformation,
                medicineDayNotification,
                getAllMedicinesOfDay,
                setFirstAidData
            }}>

            {children}
        </AppContext.Provider>
    )
}