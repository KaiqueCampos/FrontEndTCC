import React from "react";
import Header from "../../Components/Header";
import { MedicinesOfWeek } from "../../Components/MedicinesOfWeek";
import { joinMedicinesWithAndWithoutStatus } from "../../utils/joinMedicinesWithAndWithoutStatus";
import { handleMedicineData, handleStatusOfMedicines } from "../../utils/handleMedinesData";
import { medicinesOnDay } from "../../utils/medicinesOnDay";
import { parseCookies } from "../../utils/parseCookies";
import styles from "./styles.module.scss";

type MedicinesData = {
  name: string;
  id: string;
  time: string;
  status: number;
  date?: string;
  initialDate?: string;
  finalDate?: string;
}

type MedicineProps = {
  medicine: MedicinesData,
  daysWeek: string[];
}

const Medicine = (props: MedicineProps) => {

  return (
    <div id='themeBackground'>
      <div className={styles.container}>
        <Header />
        <MedicinesOfWeek
          daysWeek={props.daysWeek}
          medicine={props.medicine}
        />
      </div>
    </div>
  );
};

export default Medicine;

export async function getServerSideProps({ req }) {
  // Get token in cookies
  const token = parseCookies(req).token;

  // API connection
  const response = await fetch('http://localhost:3333/showMedicine', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ` Bearer ${token}`
    },
  });

  const medicinesData = await response.json()

  const medicinesHandled = handleMedicineData(medicinesData)
  const medicineStatusHandled = handleStatusOfMedicines(medicinesData)

  // calls the function to handle the data
  const allMedicines = medicinesOnDay(medicinesHandled);

  // const dataStatus = medicinesOnDay(arrayOfStatusMedicines);
  const MedicinesHandled = joinMedicinesWithAndWithoutStatus({ allMedicines, medicineStatusHandled })

  return {
    props: {
      medicine: MedicinesHandled,
      daysWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    }
  }
}
