type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

export function handleMedicineData(props: MedicinesData) {
    // All Medicines
    const allMedicinesDataHandled = [];
    for (var i = 0; i < props[0].length; i++) {

        // Show only "YYYY-MM-DD"
        const initialDate = props[0][i].initialDate.toString().replace('T03:00:00.000Z', '');
        const finalDate = props[0][i].finalDate.toString().replace('T03:00:00.000Z', '');

        // Data to show
        allMedicinesDataHandled.push({
            'name': props[0][i].name,
            'id': props[0][i].id,
            'time': props[0][i].time,
            'initialDate': initialDate,
            'finalDate': finalDate,
            'status': 2,
        })
    }

    return allMedicinesDataHandled
}


export function handleStatusOfMedicines(props: MedicinesData) {
    
    // Medicines Status
    const medicinesStatusHandled = []
    for (var i = 0; i < props[1].length; i++) {

        // Show only "YYYY-MM-DD"
        const date = props[1][i].date.toString().replace('T03:00:00.000Z', '');

        // Data to show
        medicinesStatusHandled.push({
            'name': props[1][i].name,
            'id': props[1][i].id,
            'time': props[1][i].time,
            'status': props[1][i].status,
            'date': date
        })
    }

    return medicinesStatusHandled
}
