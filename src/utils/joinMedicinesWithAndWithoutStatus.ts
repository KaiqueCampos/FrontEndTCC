import moment from "moment";
import { daysOfWeek } from "./daysOfWeek";

type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

type JoinMedicinesProps = {
    allMedicines: MedicinesData[],
    medicineStatusHandled: MedicinesData[];
}


export function joinMedicinesWithAndWithoutStatus(props: JoinMedicinesProps) {
    const days = daysOfWeek();
    const medicinesWithStatus = props.medicineStatusHandled;
    const MedicinesWithoutStatus = props.allMedicines;

    // Filter data of days week
    const handleData = []
    for (var i = 0; i < days.length; i++) {
        handleData.push(medicinesWithStatus.filter((medicine) => moment(days[i]).isBetween(medicine?.date, medicine?.date, null, '[]')))
    }
    console.log(handleData)

    var data = []

    for (var i = 0; i < days.length; i++) {

        if (MedicinesWithoutStatus[i].status <= 0) {
            data.push([])
        }

        for (var j = 0; j < MedicinesWithoutStatus.length; j++) {

            for (var k = 0; k < handleData[i].length; k++) {

                // Variables
                const status = handleData[i][k];
                const medicine = MedicinesWithoutStatus[i][j];

                if (status?.name === medicine?.name && status?.time === medicine?.time) {
                    MedicinesWithoutStatus[i][j] = {};
                    MedicinesWithoutStatus[i][j] = status;
                }
            }
        }
    }

    return MedicinesWithoutStatus;
}