import styles from './styles.module.scss';
import PlayVideo from '../playVideo';
import animate from '../../styles/animation.module.scss';

export default function AppointmentVideo() {

    return (
        <div className={`${styles.container} ${animate.upSlow}`}>
            <div className={styles.imgContainer}>
                <PlayVideo />
            </div>
        </div>

    )
}