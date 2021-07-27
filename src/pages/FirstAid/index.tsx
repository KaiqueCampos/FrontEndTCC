import { GetStaticProps } from "next";
import React from "react";
import { ButtonHelpAndFirstAid } from "../../Components/buttonHelpAndFirstAid.tsx";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import animate from '../../styles/animation.module.scss';
import styles from './styles.module.scss';


type FirstAidData = {
    id: number;
    name: string;
    procedure: string;
    videoLink: string;
    thumbnail: string
}

type AppointmentReminderProps = {
    firstAid: FirstAidData[]
}

export default function FirstAid(props: AppointmentReminderProps) {

    return (
        <div id='themeBackground'>
            <div className={styles.container}>
                <Header />

                <TitlePage
                    title='Primeiros Socorros'
                    titleImageIcon='/img/icons/firstAid.png'
                />

                <div className={`${styles.firstAidItemsContainer} ${animate.up}`}>

                    {props.firstAid.map(firstAid => (
                        <ButtonHelpAndFirstAid
                            key={firstAid.id}
                            legend={firstAid.name}
                            link='FirstAidPage'
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
            firstAid: data
        },
        revalidate: 60 * 60 * 24 //24 hours
    }
}
