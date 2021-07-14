import React from "react";
import { ButtonHelpAndFirstAid } from "../../Components/buttonHelpAndFirstAid.tsx";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'
import { useTheme } from "../../hooks/useTheme";

const Help = () => {

    const {theme} = useTheme()

    return (
        <div id='themeBackground'>
            <div className={styles.container}>

                <Header />

                <TitlePage
                    title='Ajuda'
                    titleImageIcon={theme === 'light' ? '/img/icons/help.png' : '/img/icons/helpWhiteIcon.png'}
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