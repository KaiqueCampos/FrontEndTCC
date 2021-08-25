import { GetStaticProps } from "next";
import Head from "next/Head";
import React from "react";
import { ButtonHelpAndFirstAid } from "../../Components/buttonHelpAndFirstAid.tsx";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import { useApp } from "../../hooks/useApp";
import animate from '../../styles/animation.module.scss';
import styles from './styles.module.scss';


type FirstAidData = {
    id: number;
    name: string;
    procedureIntroduction: string;
    procedure: string;
    videoLink: string;
    thumbnail: string
}

type AppointmentReminderProps = {
    data: FirstAidData[]
}

export default function FirstAid(props: AppointmentReminderProps) {

    const { setFirstAidData } = useApp()

    return (
        <div id='themeBackground'>
            
            <Head>
                <title>Primeiros-Socorros | Saúde em Mãos</title>
            </Head>

            <div className={styles.container}>
                <Header />

                <TitlePage
                    title='Primeiros Socorros'
                    titleImageIcon='/img/icons/firstAid.png'
                />

                <div className={`${styles.firstAidItemsContainer} ${animate.up}`}>

                    {props.data.map(firstAid => (
                        <ButtonHelpAndFirstAid
                            key={firstAid.id}
                            legend={firstAid.name}
                            link='FirstAidPage'
                            onClick={() => setFirstAidData(firstAid)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    // API connection
    const response = await fetch('http://localhost:3333/showFirstAid', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json()

    return {
        props: {
            data: data
        },
        revalidate: 60 * 60 * 24 //24 hours
    }
}
