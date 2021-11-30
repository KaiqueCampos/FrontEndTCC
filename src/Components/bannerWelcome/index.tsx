import styles from './styles.module.scss';
import animate from '../../styles/animation.module.scss'

export default function BannerWelcome() {

    return (
        <div className={styles.bannerContainer}>
            <img
                className={`${styles.bannerImage} ${animate.up}`}
                src="https://www.residencialsaphira.com.br/img/idoso.png"
            />
            
            <div>
                <h1>Bem-Vindo.</h1>
                <p>É uma honra tê-lo no nosso aplicativo, <br/> esperamos suprir suas necessidades. <br/>  Obrigado pela preferência!</p>
            </div>

        </div>
    )
}