import Link from 'next/Link'

import styles from './styles.module.scss'
import animate from '../../styles/animation.module.scss'
import { useTheme } from '../../hooks/useTheme'

export function MenuItems() {

    const {theme} = useTheme()
    
    return (
        <div className={styles.container}>

            <div className={`${animate.up} ${styles.menuItem}`}>
                <Link href="/Emergency">
                    <div>
                        <img src='img/icons/emergency.png' />
                        <p>Emergência</p>
                    </div>
                </Link>
            </div>

            <div className={`${animate.up} ${styles.menuItem}`}>
                <Link href="/MedicinesOfWeek">
                    <div>
                        <img src='img/icons/medicine.png' />
                        <p>Remédios</p>
                    </div>
                </Link>
            </div>

            <div className={`${animate.up} ${styles.menuItem}`}>
                <Link href="Hospitals">
                    <div>
                        <img src='img/icons/consultas.png' />
                        <p>Consultas</p>
                    </div>
                </Link>
            </div>

            <div className={`${animate.up} ${styles.menuItem}`}>
                <Link href="Appointments">
                    <div>
                        <img src='img/icons/history.png' />
                        <p>Histórico de Consultas</p>
                    </div>
                </Link>
            </div>

            <div className={`${animate.up} ${styles.menuItem}`}>
                <Link href="FirstAid">
                    <div>
                        <img src='img/icons/firstAid.png' />
                        <p>Socorros</p>
                    </div>
                </Link>
            </div>

            <div className={`${animate.up} ${styles.menuItem}`}>
                <Link href="Help">
                    <div>
                        <img src={theme === 'light' ? 'img/icons/help.png' : 'img/icons/helpWhiteIcon.png'} />
                        <p>Ajuda</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}