import React from "react";
import { ButtonHelpAndFirstAid } from "../../Components/buttonHelpAndFirstAid.tsx";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";

import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'

const FirstAid = () => {

    return (
        <div id='themeBackground'>
            <div className={styles.container}>
                <Header />

                <TitlePage
                    title='Primeiros Socorros'
                    titleImageIcon='/img/icons/firstAid.png'
                />

                <div className={`${styles.firstAidItemsContainer} ${animate.up}`}>

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />

                    <ButtonHelpAndFirstAid
                        legend='Desmaio'
                        link='FirstAidPage'
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstAid;