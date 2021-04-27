import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header/header";
import NoMedicines from "../Components/NoMedicine/NoMedicines";
import animate from "../styles/animation/animation.module.css";
import styles from "../styles/pages/Medicines.module.scss";
import { parseCookies } from "../utils/parseCookies";


const Medicine = () => {

  //Variables
  const [data, setData] = useState([]);
  const [medicines, setMedicines] = useState([])
  const router = useRouter();

  //Return the date of days of week
  var currentDate = moment();
  var weekStart = currentDate.clone().startOf('week');

  var days = [];
  for (var i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD"));
  };

  // Filter data of days week
  const domingo = data.filter((medicine) => moment(days[0]).isBetween(medicine.initialDate, medicine.finalDate, null, '[]'));
  const segunda = data.filter((medicine) => moment(days[1]).isBetween(medicine.initialDate, medicine.finalDate, null, '[]'));
  const terca = data.filter((medicine) => moment(days[2]).isBetween(medicine.initialDate, medicine.finalDate, null, '[]'));
  const quarta = data.filter((medicine) => moment(days[3]).isBetween(medicine.initialDate, medicine.finalDate, null, '[]'));
  const quinta = data.filter((medicine) => moment(days[4]).isBetween(medicine.initialDate, medicine.finalDate, null, '[]'));
  const sexta = data.filter((medicine) => moment(days[5]).isBetween(medicine.initialDate, medicine.finalDate, null, '[]'));
  const sabado = data.filter((medicine) => moment(days[6]).isBetween(medicine.initialDate, medicine.finalDate, null, '[]'));

  // variables to use in mapFunction
  const daysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  var medicinesOnDay = [domingo, segunda, terca, quarta, quinta, sexta, sabado];

  // Order medicines of day by time
  const array = []
  for (var i = 0; i < medicinesOnDay.length; i++) {
    if (medicinesOnDay[i].length > 0) {
      const x = medicinesOnDay[i].sort(function (a, b) {
        const n1 = parseInt(b.time.replace(':', ''))
        const n2 = parseInt(a.time.replace(':', ''))
        return n2 - n1;
      });
      array.push(x)
    } else {
      array.push([])
    }
  }

  // medicinesOnDay ordered
  medicinesOnDay = array;

  useEffect(() => {
    async function teste() {

      try {

        // Get token in cookies
        const { token } = parseCookies('')

        // API connection
        const indexLogged = await fetch('http://localhost:3333/showMedicine', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ` Bearer ${token}`
          },
        });

        // Get JSON information and save in variables line (7-9)
        const dataJson = await indexLogged.json();

        const data = [];
        for (var i = 0; i < dataJson.length; i++) {
          // Show only "YYYY-MM-DD"
          const initialDate = dataJson[i].initialDate.toString().replace('T03:00:00.000Z', '');
          const finalDate = dataJson[i].finalDate.toString().replace('T03:00:00.000Z', '');

          // Data to show
          data.push({
            'name': dataJson[i].name,
            'id': dataJson[i].id,
            'time': dataJson[i].time,
            'initialDate': initialDate,
            'finalDate': finalDate
          })
        }

        return setData(data)

      } catch (error) {
        console.log(error)
      }
    }

    teste()
  }, [])

  function setInformation() {
    // Select link clicked and set this medicines on localStorage
    document.querySelectorAll("a").forEach((a) => {
      a.onclick = (event) => {
        const dayClicked = a.querySelector('span').innerHTML
        localStorage.setItem('medicines', JSON.stringify(medicinesOnDay[daysWeek.indexOf(dayClicked)]))

        router.push(`/MedicineDay?day=${dayClicked}`)
      }
    })
  }

  return (
    <div className='container'>
      <div className="containerBackground">
        <Header />

        <div className={styles.container}>
          <div className='titlePage'>
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
                        <div className={animate.upMoreSlow} key={medicine.id}>
                          <p>{medicine.time}</p>
                          <hr></hr>
                          <p>{medicine.name}</p>
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
    </div>
  );
};

export default Medicine;
