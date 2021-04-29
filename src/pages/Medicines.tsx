import { useRouter } from "next/router";
import React from "react";
import Header from "../Components/Header/header";
import NoMedicines from "../Components/NoMedicine/NoMedicines";
import animate from "../styles/animation/animation.module.css";
import styles from "../styles/pages/Medicines.module.scss";
import { medicinesOnDay } from "../utils/medicinesOnDay";
import { parseCookies } from "../utils/parseCookies";


const Medicine = (props) => {

  //Variables
  const router = useRouter();

  function setInformation() {
    // Select link clicked and set this medicines on localStorage
    document.querySelectorAll("a").forEach((a) => {
      a.onclick = (event) => {
        const dayClicked = a.querySelector('span').innerHTML
        localStorage.setItem('medicines', JSON.stringify(props.data[props.daysWeek.indexOf(dayClicked)]))

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
            {props.daysWeek.map((days) => (

              <div className={`${styles.emergencyItem} ${animate.up}`}>
                <h3>{days}</h3>

                {/* if no has medicine in this day, show <NoMedicines/> */}
                {props.data[props.daysWeek.indexOf(days)].length > 0 ? (
                  <>
                    <div className={`${styles.medicines} ${animate.upSlow}`}>

                      {/* show each medicine of this day */}
                      {props.data[props.daysWeek.indexOf(days)].map((medicine) => (
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

  const array = [];
  for (var i = 0; i < responseJSON.length; i++) {

    // Show only "YYYY-MM-DD"
    const initialDate = responseJSON[i].initialDate.toString().replace('T03:00:00.000Z', '');
    const finalDate = responseJSON[i].finalDate.toString().replace('T03:00:00.000Z', '');

    // Data to show
    array.push({
      'name': responseJSON[i].name,
      'id': responseJSON[i].id,
      'time': responseJSON[i].time,
      'initialDate': initialDate,
      'finalDate': finalDate
    })
  }

  // calls the function to handle the data
  const data = medicinesOnDay(array);

  return {
    props: {
      data: data,
      daysWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    }
  }
}
