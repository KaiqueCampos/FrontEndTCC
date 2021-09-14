import moment from "moment";
import { useRouter } from "next/router";
import React, { createContext, ReactNode, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { daysOfWeek } from '../utils/daysOfWeek';

type FirstAidData = {
    id: number;
    name: string;
    procedureIntroduction: string;
    procedure: string;
    videoLink: string;
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
    medicineToBeTaken: MedicinesData;
    medicinesToday: Array<Object>
    userInformation: UserInformation;
    medicineDayNotification: () => void;
    getAllMedicinesOfDay: (props: MedicinesData) => Number;
    getUserInformation: (props: Array<Object>) => void;
    setFirstAidData: (props: FirstAidData) => void
    getFirstAidData: () => FirstAidData;
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
            if (medicinesToday[i].status === 2 && medicinesToday[i].time === time) {
                setMedicineToBeTaken(medicinesToday[i])
                router.push('/MedicineToBeTaken');
            }
        }
    };

    // Verify in each minute if has medicines to taken
    var toExactMinute = 60000 - (new Date().getTime() % 60000)

    setTimeout(function() {
        setInterval(medicineDayNotification, 60000)
        medicineDayNotification()
    }, toExactMinute)

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

    function setFirstAidData(props) {
        localStorage.setItem('firstAid', JSON.stringify(props))
    }

    function getFirstAidData() {
        return JSON.parse(localStorage.getItem('firstAid'))
    }

    return (
        <AppContext.Provider
            value={{
                medicineToBeTaken,
                userInformation,
                medicinesToday,
                getUserInformation,
                medicineDayNotification,
                getAllMedicinesOfDay,
                setFirstAidData,
                getFirstAidData
            }}>

            {children}
        </AppContext.Provider>
    )
}