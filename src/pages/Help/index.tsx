import React from "react";
import { ButtonHelpAndFirstAid } from "../../Components/buttonHelpAndFirstAid.tsx";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'

const Help = () => {

    return (
        <div id='themeBackground'>
            <div className={styles.container}>

                <Header />

                <TitlePage
                    title='Ajuda'
                    titleImageIcon='/img/icons/help.png'
                />

                <div className={`${styles.helpItems} ${animate.up}`}>
                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />

                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />

                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />

                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />

                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />

                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />

                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />

                    <ButtonHelpAndFirstAid
                        legend="Ajuda"
                        link="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Help;