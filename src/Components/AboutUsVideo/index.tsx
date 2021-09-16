import styles from './styles.module.scss'
import animate from '../../styles/animation.module.scss'
import PlayVideo from '../playVideo'

export function AboutUsVideo() {
    return (
        <div className={`${styles.container} ${animate.upMoreSlow}`}>
            <div className={styles.aboutUsImageContainer}>
                <img src='img/icons/logo.png' />
                <p>
                Somos a equipe do Saúde em mãos, e nosso objetivo principal  é te auxiliar  a controlar seus horários de medicação e suporte dia a dia em relação a sua saúde.
                </p>
                <img src='/img/backgrounds/purpleShadow.png' />
            </div>
            <PlayVideo />
        </div>
    )
}