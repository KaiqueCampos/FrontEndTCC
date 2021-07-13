import { AboutUsVideo } from '../AboutUsVideo';
import { LoginRegisterOptions } from '../LoginRegisterOptions';
import styles from './styles.module.scss';

export default function NotLogged() {
    return (
        <div id='themeBackground'>
            <div className={styles.container}>
                <LoginRegisterOptions />
                <AboutUsVideo />
            </div>
        </div>
    )
}