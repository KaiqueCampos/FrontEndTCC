import Head from "next/Head";
import Link from "next/Link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Medicines } from "../../Components/Medicines";
import { TitlePage } from "../../Components/TitlePage";
import styles from './styles.module.scss';

const MedicineDay = () => {
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

    return (
        <div id='themeBackground'>

            <Head>
                <title>Medicamentos de {day} | Saúde em Mãos</title>
            </Head>

            <div className={styles.container}>
                <Header />

                <TitlePage
                    title={`Remédios | ${day}`}
                    titleImageIcon='/img/icons/medicine.png'
                />

                <div className={styles.medicines}>
                    <h3>Remédios</h3>

                    {data.map((medicine) => (
                        <Medicines
                            medicine={medicine}
                            hasDeleteButton={true}
                        />
                    ))}

                </div>

                <Link href="NewMedicine">
                    <div className={styles.addMedicine}>
                        <img src='/img/icons/add.png' />
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default MedicineDay;