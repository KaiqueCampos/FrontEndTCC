import Head from "next/Head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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

export default function FirstAidPage() {

    const { getFirstAidData } = useApp()
    const [firstAid, setFirstAid] = useState<FirstAidData>()

    useEffect(() => {
        setFirstAid(getFirstAidData())
    }, [])

    const firstAidProcedureTopics = firstAid?.procedure.split('/')

    return (
        <div id='themeBackground'>

            <Head>
                <title>{firstAid?.name} | Saúde em Mãos</title>
            </Head>

            <div className={styles.container}>
                <Header />

                <TitlePage
                    title={firstAid?.name}
                    titleImageIcon='/img/icons/firstAid.png'
                />

                <div className={`${styles.firstAidContainer} ${animate.up}`}>
                    <div className={styles.videoContainer}>
                        <img src="https://ead.cdmensino.com.br/files/curso-primeiros-socorros.jpg" />
                        <a href={firstAid?.videoLink}>
                            <img src="img/icons/playIcon.png" alt="Iníciar Video" />
                        </a>
                    </div>

                    <div className={styles.legend}>
                        <p>
                            {firstAid?.procedureIntroduction}
                        </p>

                        <ol>
                            {firstAidProcedureTopics?.map(procedureTopics => (
                                <li key={procedureTopics}>
                                    {procedureTopics}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};



