import styles from './styles.module.scss';

export default function BannerWelcome() {

    return (
        <div className={styles.bannerContainer}>
            <div>
                <h1>Bem-Vindo.</h1>
                <p>É uma honra tê-lo no nosso aplicativo, esperamos suprir suas necessidades. Obrigado pela preferência!</p>
            </div>
        </div>
    )
}