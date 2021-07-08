import Link from "next/Link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { TitlePage } from "../../Components/TitlePage";
import Header from "../../Components/Header";
import { errorNotification, sucessNotification } from "../../utils/ToastifyNotification";

import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss';





const MedicineDay = (req) => {
    //Variables
    const [day, setDay] = useState('');
    const [data, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function getInformation() {

            try {
                // Get information from url
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                setDay(urlParams.get('day'))

                // Get medicines on localStorage
                const medicines = localStorage.getItem('medicines')
                return setData(JSON.parse(medicines))

            } catch (error) {
                console.log(error)
            }
        }

        getInformation()
    }, [])

    async function deleteMedicine(props) {

        // API connection
        const response = await fetch("http://localhost:3333/deleteMedicine", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                medicineId: props,
            }),
        });

        // login sucess or not
        if (response.status === 200) {
            // Set token
            sucessNotification("Remédio Deletado com sucesso")
            return router.push('/Medicines');

        } else {
            errorNotification("Email ou senha incorretos, tente novamente...")
        }
    }

    return (
        <div id='themeBackground'>
            <div className='main'>
                <Header />

                <div className={styles.container}>

                    <TitlePage
                        title={`Remédios | ${day}`}
                        titleImageIcon='/img/icons/medicine.png'
                    />

                    <div className={styles.medicinesOnDay}>
                        <h3>Remédios</h3>

                        <div className={`${styles.medicines} ${animate.up}`}>

                            {data.map((medicine) => (
                                <div
                                    className={animate.upSlow}
                                    key={medicine.id}
                                    id={medicine.status === 1 ? 'noTaken' : medicine.status === 0 ? 'taken' : ''}
                                >
                                    <p>{medicine.time}</p>
                                    <hr></hr>
                                    <p>{medicine.name}</p>
                                    <hr className={styles.line}></hr>
                                    <button onClick={() => deleteMedicine(medicine.id)}><img src='img/icons/delete.jpg' /></button>
                                </div>
                            ))}

                        </div>
                    </div>

                    <Link href="NewMedicine">
                        <div className={styles.addMedicine}>
                            <img src='/img/icons/add.png' />
                        </div>
                    </Link>

                </div>
            </div>
        </div >
    );
};

export default MedicineDay;