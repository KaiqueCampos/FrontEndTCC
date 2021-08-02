import React from "react";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'
import { useApp } from "../../hooks/useApp";
import Head from "next/Head";

export default function FirstAidPage() {

    const { firstAid } = useApp()

    return (
        <div id='themeBackground'>

            <Head>
                <title>{firstAid.name} | Saúde em Mãos</title>
            </Head>

            <div className={styles.container}>
                <Header />

                <TitlePage
                    title={firstAid?.name}
                    titleImageIcon='/img/icons/firstAid.png'
                />

                <div className={`${styles.firstAidContainer} ${animate.up}`}>
                    <div className={styles.videoContainer}>
                        <img src="https://i.ytimg.com/vi/1MtKw-uP1NM/maxresdefault.jpg" />
                        <a href={firstAid?.videoLink}>
                            <img src="img/icons/playIcon.png" alt="Iníciar Video" />
                        </a>
                    </div>

                    <div className={styles.legend}>
                        <p>
                            {firstAid?.procedure}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



