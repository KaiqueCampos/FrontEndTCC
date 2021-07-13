import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'
import { useTheme } from '../../hooks/useTheme';
import Link from 'next/Link';

export function LoginRegisterOptions() {
    const { theme } = useTheme();

    return (
        <div className={`${styles.container} ${animate.upSlow}`}>
            <img className={styles.accountLogo} src="img/icons/userPurple3.png" />
            <img className={styles.accountLogo} src={theme === 'light' ? "img/icons/userPurple3.png" : "img/icons/userPurple4.png"} />


            <div className={styles.buttonsContainer}>
                <Link href='/Register'><p>Registrar-se</p></Link>
                <Link href='/Login'>
                    <div>
                        <img src="img/icons/loginPurple.png" />
                        <p>Login</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}