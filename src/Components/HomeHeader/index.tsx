import Link from 'next/Link';
import { initialProfile, profileHover } from '../../utils/indexMenuAnimation';
import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useCookies } from 'react-cookie';
import styles from './styles.module.scss'

type HomeMenuProps = {
    username: string;
    imageProfile: string;
}

export function HomeHeader(props: HomeMenuProps) {
    const [cookie, setCookie] = useCookies(["token"])
    const [imageProfile, setImageProfile] = useState('');
    const { buttonTheme, toggleTheme } = useTheme();

    function logout() {
        setCookie("token", "");
    }

    useEffect(() => {
        // Set Image in profile
        if (props.imageProfile){
            setImageProfile('data:image/jpeg;base64,' + btoa(props.imageProfile));
        } else {
            setImageProfile('img/icons/userPurple.png')
        }

        // headerMenu initializes with display none
        toggleTheme
        document.getElementById("headerMenu").style.display = 'none'
    }, [!toggleTheme])

    return (
        <div
            className={styles.container}
            id="header"
            onMouseLeave={initialProfile}
        >
            <div id="textProfile" className={styles.textProfile}>
                <p>Bem-Vindo(a)</p>
                <h3>{props.username}</h3>
            </div>

            <button
                onClick={initialProfile}
                id='comeBackButton'
                className={styles.comeBackButton}
            >
                <img src='/img/icons/back.png' />
            </button>

            <div id="profile" onMouseOver={profileHover}>
                <img id='imageSRC' src={imageProfile} />
            </div>

            <div className={styles.headerMenu} id="headerMenu">
                <div className={styles.themeContainer}>
                    <p>Tema Dark</p>

                    <button
                        id={buttonTheme ? 'active' : 'disabled'}
                        className={styles.toggleThemeButton}
                        onClick={toggleTheme}
                        type='button'
                    >
                        <div id="circleButton"></div>
                    </button>
                </div>

                <hr></hr>

                <Link href="/UpdateInformations">
                    <h3>Editar Informações</h3>
                </Link>
                <hr></hr>

                <Link href="/">
                    <button id="logoutButton" onClick={logout}>
                        <img src="/img/icons/sair.png" />
                        Sair
                    </button>
                </Link>
            </div>
        </div>
    )
}