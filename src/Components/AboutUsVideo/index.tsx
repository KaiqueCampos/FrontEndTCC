import styles from './styles.module.scss'
import animate from '../../styles/animation.module.scss'
import PlayVideo from '../playVideo'

export function AboutUsVideo() {
    return (
        <div className={`${styles.container} ${animate.upMoreSlow}`}>
            <div className={styles.aboutUsImageContainer}>
                <img src='img/icons/logo.png' />
                <p>
                    O preenchimento das seguintes informações são opcionais,
                    elas servem para agilizar o preenchimento dos formulários
                    de consulta e uma melhor usabilidade do site.
                </p>
                <img src='/img/backgrounds/purpleShadow.png' />
            </div>
            <PlayVideo />
        </div>
    )
}