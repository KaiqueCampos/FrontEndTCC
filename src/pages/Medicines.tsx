import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import titlePage from "../styles/Components/titlePage.module.css";
import styles from "../styles/pages/Medicines.module.css";
import animate from "../styles/animation/animation.module.css";
import Header from "../Components/header";
import NoMedicines from "../Components/NoMedicines";
import moment from "moment";
import { useRouter } from "next/router";


const Medicine = () => {
  //Variables
  const [data, setData] = useState([]);
  const router = useRouter();

  //Return the date of days of week
  var currentDate = moment();
  var weekStart = currentDate.clone().startOf('week');

  var days = [];
  for (var i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD"));
  };

  // Filter data of days week
  const domingo = data.filter((medicine) => medicine.initialDate === days[0]);
  const segunda = data.filter((medicine) => medicine.initialDate === days[1]);
  const terca = data.filter((medicine) => medicine.initialDate === days[2]);
  const quarta = data.filter((medicine) => medicine.initialDate === days[3]);
  const quinta = data.filter((medicine) => medicine.initialDate === days[4]);
  const sexta = data.filter((medicine) => medicine.initialDate === days[5]);
  const sabado = data.filter((medicine) => medicine.initialDate === days[6]);

  // variables to use in mapFunction
  const daysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const medicinesOnDay = [domingo, segunda, terca, quarta, quinta, sexta, sabado];

  console.log(days)

  useEffect(() => {
    async function teste() {

      try {
        // Get token in LocalStorage
        const token = localStorage.getItem('token')

        // API connection
        const indexLogged = await fetch('http://localhost:3333/showMedicine', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ` Bearer ${token}`
          },
        });

        // Get JSON information and save in variables line (7-9)
        const indexInformationJSON = await indexLogged.json();
        return setData(indexInformationJSON)
      } catch {
        console.log("algo deu errado")
      }
    }

    teste()
  }, [])

  console.log(data)

  return (
    <Layout>
      <div className="containerBackground">
        <Header />

        <div className={styles.container}>
          <div className={titlePage.titlePage}>
            <img src="/img/icons/medicine.png" />
            Remédios
          </div>

          <div className={styles.emergencyContainer}>

            {/* Show div of each day in week */}
            {daysWeek.map((days) => (

              <div className={`${styles.emergencyItem} ${animate.up}`}>
                <h3>{days}</h3>

                {/* if no has medicine in this day, show <NoMedicines/> */}
                {medicinesOnDay[daysWeek.indexOf(days)].length > 0 ? (
                  <>
                    <div className={`${styles.medicines} ${animate.upSlow}`}>

                      {/* show each medicine of this day */}
                      {medicinesOnDay[daysWeek.indexOf(days)].map((medicine) => (
                        <div className={animate.upMoreSlow}>
                          <p>{medicine.time}</p>
                          <hr></hr>
                          <p>{medicine.name}</p>
                        </div>
                      ))}

                    </div>

                    <a href={`MedicineDay?day=${days}`}>
                      <img src="/img/icons/seeMore.png" />
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
    </Layout>
  );
};

export default Medicine;
