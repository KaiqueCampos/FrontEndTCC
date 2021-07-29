import React from "react";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'

export default function FirstAidPage(){

    return (
        <div id='themeBackground'>
            <div className={styles.container}>
                <Header />

                <TitlePage
                    title='Desmaio'
                    titleImageIcon='/img/icons/firstAid.png'
                />

                <div className={`${styles.firstAidContainer} ${animate.up}`}>
                    <div className={styles.videoContainer}>
                        <img src="https://i.ytimg.com/vi/1MtKw-uP1NM/maxresdefault.jpg" />
                        <a href='#'>
                            <img src="img/icons/playIcon.png" alt="Iníciar Video" />
                        </a>
                    </div>

                    <div className={styles.legend}>
                        <p>
                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />

                            Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                            Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                            Afrouxe as roupas <hr />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
