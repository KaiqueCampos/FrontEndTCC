import React from "react";
import { FirstAidItems } from "../../Components/FirstAidItem.tsx";
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

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />

                    <FirstAidItems
                        firstAidType='Desmaio'
                        link='FirstAidPage'
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstAid;