import React from "react";
import { ButtonHelpAndFirstAid } from "../../Components/buttonHelpAndFirstAid.tsx";
import Header from "../../Components/Header";
import { TitlePage } from "../../Components/TitlePage";
import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'
import { useTheme } from "../../hooks/useTheme";
import { GetStaticProps } from "next";

type HelpData = {
    id: number;
    title: string;
    videoLink: string;
}

type HelpProps = {
    data: HelpData[]
}

export default function Help(props : HelpProps) {

    const { theme } = useTheme()

    return (
        <div id='themeBackground'>
            <div className={styles.container}>

                <Header />

                <TitlePage
                    title='Ajuda'
                    titleImageIcon={theme === 'light' ? '/img/icons/help.png' : '/img/icons/helpWhiteIcon.png'}
                />

                <div className={`${styles.helpItems} ${animate.up}`}>

                    {props.data.map(help => (
                        <ButtonHelpAndFirstAid
                        key={help.id}
                        legend={help.title}
                        link={help.videoLink}
                    />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    // API connection
    const response = await fetch('http://localhost:3333/showHelp', {
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