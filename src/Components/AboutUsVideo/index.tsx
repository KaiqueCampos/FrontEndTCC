import styles from './styles.module.scss'
import animate from '../../styles/animation.module.scss'
import PlayVideo from '../playVideo'

export function AboutUsVideo() {
    return (
        <div className={`${styles.container} ${animate.upMoreSlow}`}>
            <div className={styles.aboutUsImageContainer}>
                <img src='img/icons/logo.png' />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <img src='/img/backgrounds/purpleShadow.png' />
            </div>
            <PlayVideo />
        </div>
    )
}