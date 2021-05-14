import Link from 'next/Link';
import styles from './styles.module.scss';

export default function Header() {
    return (
        <div className={`${styles.container}`}>
                <Link href='/'>
                    <img className={styles.comeBack} src='/img/icons/back.png'/>
                </Link>
                <div>
                    <img src='/img/icons/logo.png' />
                </div>
        </div>
    )
}