import React from "react";
import { useRouter } from "next/router";
import { parseCookies } from "../../utils/parseCookies";
import { medicinesOnDay } from "../../utils/medicinesOnDay";
import { concatWithWithoutStatus } from "../../utils/concatWithWithoutStatus";

import Header from "../../Components/Header";
import NoMedicines from "../../Components/NoMedicine";

import styles from "./styles.module.scss";
import animate from "../../styles/animation.module.scss";
import { useApp } from "../../hooks/useApp";

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
  const medicine = props.medicine;
  const daysWeek = props.daysWeek;
  const router = useRouter();
  
  const {
    getAllMedicinesOfDay,
  } = useApp();
  
  const today = getAllMedicinesOfDay(medicine);

  function setInformation() {
    // Select link clicked and set this medicines on localStorage
    document.querySelectorAll("a").forEach((a) => {
      a.onclick = (event) => {
        localStorage.setItem('medicines', JSON.stringify(medicine[Number(today)]));
        const dayClicked = a.querySelector('span').innerHTML
        router.push(`/MedicineOfDay?day=${dayClicked}`)
      }
    })
  }

  return (
    <div id='themeBackground'>
      <div className={styles.container}>
        <Header />

        <div className={styles.medicinesContainer}>

          {/* Show div of each day in week */}
          {daysWeek.map((days) => (

            <div
              key={daysWeek.indexOf(days)}
              className={`${styles.medicinesOfDay} ${animate.up}`}
              id={
                daysWeek.indexOf(days) === today ? 'today' : ''
                  || daysWeek.indexOf(days) < today ? 'inactive' : ''
              }
            >
              <h3>{days}</h3>

              {/* if no has medicine in this day, show <NoMedicines/> */}
              {medicine[daysWeek.indexOf(days)].length > 0 ? (
                <>
                  <div className={`${styles.medicine} ${animate.upSlow}`}>

                    {/* show each medicine of this day */}
                    {medicine[daysWeek.indexOf(days)].map((medicine) => (

                      <div
                        className={animate.upMoreSlow}
                        key={medicine.id}
                        id={medicine.status === 1 ? 'noTaken' : medicine.status === 0 ? 'taken' : ''}
                      >
                        <p>{medicine.time}</p>
                        <hr></hr>
                        <p>{medicine.name}</p>
                        <hr></hr>
                      </div>
                    ))}

                  </div>

                  <a onClick={setInformation}>
                    <img className={styles.seeMoreBTN} src="/img/icons/seeMore.png" />
                    <span>{days}</span>
                  </a>
                </>

              ) : (
                <NoMedicines />
              )}

            </div>
          ))}

        </div>
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

  const responseJSON = await response.json()
  console.log(responseJSON)

  // All Medicines
  const array = [];
  for (var i = 0; i < responseJSON[0].length; i++) {

    // Show only "YYYY-MM-DD"
    const initialDate = responseJSON[0][i].initialDate.toString().replace('T03:00:00.000Z', '');
    const finalDate = responseJSON[0][i].finalDate.toString().replace('T03:00:00.000Z', '');

    // Data to show
    array.push({
      'name': responseJSON[0][i].name,
      'id': responseJSON[0][i].id,
      'time': responseJSON[0][i].time,
      'initialDate': initialDate,
      'finalDate': finalDate,
      'status': 2,
    })
  }

  // Medicines Status
  const arrayOfStatusMedicines = []
  for (var i = 0; i < responseJSON[1].length; i++) {

    // Show only "YYYY-MM-DD"
    const date = responseJSON[1][i].date.toString().replace('T03:00:00.000Z', '');

    // Data to show
    arrayOfStatusMedicines.push({
      'name': responseJSON[1][i].name,
      'id': responseJSON[1][i].id,
      'time': responseJSON[1][i].time,
      'status': responseJSON[1][i].status,
      'date': date
    })
  }

  // calls the function to handle the data
  const data = medicinesOnDay(array);

  // const dataStatus = medicinesOnDay(arrayOfStatusMedicines);
  const dataFinal = concatWithWithoutStatus({ data, arrayOfStatusMedicines })

  return {
    props: {
      medicine: dataFinal,
      daysWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
      ,
    }
  }
}
