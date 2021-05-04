import styles from './styles.module.scss';
import PlayVideo from '../playVideo/playVideo';
import animate from '../../styles/animation/animation.module.css';

export default function AppointmentVideo() {

    return (
        <div className={`${styles.container} ${animate.upSlow}`}>
            <div className={styles.imgContainer}>
                <PlayVideo />
            </div>
        </div>

    )
}