import Link from 'next/Link';
import styles from './styles.module.scss';

type HeaderProps = {
    backButtonColor?: 'purple';
}

export default function Header(props: HeaderProps) {
    return (
        <div className={`${styles.container}`}>
            <Link href='/'>
                <img
                    className={styles.comeBack}
                    src={
                        props.backButtonColor === 'purple'
                            ? '/img/icons/backButtonPurple.png'
                            : '/img/icons/back.png'
                    }
                />
            </Link>
            <div>
                <img src='/img/icons/logo.png' />
            </div>
        </div>
    )
}