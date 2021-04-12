import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import titlePage from "../styles/Components/titlePage.module.css";
import styles from "../styles/pages/Medicines.module.css";
import animate from "../styles/animation/animation.module.css";
import Header from "../Components/header";
import NoMedicines from "../Components/NoMedicines";
import moment from "moment";

const Medicine = () => {
  //Variables
  const [data, setData] = useState([]);
  const segunda = data.filter((medicine) => medicine.id === 1);
  const terca = data.filter((medicine) => medicine.id === 2);
  const quarta = data.filter((medicine) => medicine.id === 3);
  const quinta = data.filter((medicine) => medicine.id === 4);
  const sexta = data.filter((medicine) => medicine.id === 5);
  const sabado = data.filter((medicine) => medicine.id === 6);
  const domingo = data.filter((medicine) => medicine.id === 7);

  //Return the date of days of week
  var currentDate = moment();
  var weekStart = currentDate.clone().startOf('week');

  var days = [];
  for (var i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD"));
  };

  console.log(days)

  useEffect(() => {
    async function teste() {

      try {
        // Get token in LocalStorage
        const token = localStorage.getItem('token')

        // API connection
        const indexLogged = await fetch('http://localhost:3333/medicine', {
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
            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Domingo</h3>

              {domingo.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {domingo.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>{medicine.id}</p>
                        <hr></hr>
                        <p>{medicine.username}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>


            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Segunda</h3>
              {segunda.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {segunda.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>{medicine.id}</p>
                        <hr></hr>
                        <p>{medicine.username}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Terça</h3>

              {terca.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {terca.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>{medicine.id}</p>
                        <hr></hr>
                        <p>{medicine.username}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Quarta</h3>

              {quarta.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {quarta.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>{medicine.id}</p>
                        <hr></hr>
                        <p>{medicine.username}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Quinta</h3>

              {quinta.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {quinta.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>{medicine.id}</p>
                        <hr></hr>
                        <p>{medicine.username}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Sexta</h3>

              {sexta.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {sexta.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>{medicine.id}</p>
                        <hr></hr>
                        <p>{medicine.username}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>
            <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
              <h3>Sábado</h3>

              {sabado.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {sabado.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>{medicine.id}</p>
                        <hr></hr>
                        <p>{medicine.username}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Medicine;
