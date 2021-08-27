import Head from "next/Head";
import Link from "next/Link";
import { useRouter } from 'next/router';
import { emit } from "node:process";
import React, { ImgHTMLAttributes, SyntheticEvent, useState } from "react";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import BannerWelcome from "../../Components/bannerWelcome";
import { useTheme } from "../../hooks/useTheme";
import animate from '../../styles/animation.module.scss';
import styles from '../../styles/login_register.module.scss';
import { errorNotification, sucessNotification } from "../../utils/ToastifyNotification";

const Register = () => {

    // definition of variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePerfil, setImagePerfil] = useState('')
    const router = useRouter();

    // Open input file and change image
    function upload() {
        document.getElementById('uploadImage').click();
    }

    function uploadFile() {
        const fileElement = document.getElementById('uploadImage') as HTMLInputElement
        var file = fileElement.files[0];

        var reader = new FileReader();
        reader.onloadend = function () {
            /******************* for Binary ***********************/
            var data = (reader.result as string).split(',')[1];
            var binaryBlob = atob(data);
            setImagePerfil(binaryBlob)
            document.querySelector<HTMLImageElement>('#imageSRC').src = 'data:image/jpeg;base64,' + btoa(binaryBlob);
        }

        reader.readAsDataURL(file);
    }

    useEffect(() => {
        console.log(imagePerfil.length)
    }
    , [imagePerfil])

    // submit function
    const submit = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            // API connection
            const register = await fetch('http://localhost:3333/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password,
                    imagePerfil: imagePerfil
                })
            });

            sucessNotification('Cadastro feito com sucesso!')
            return router.push('/Login')

        } catch (error) {
            errorNotification("Não foi possível executar o cadastro, tente novamente...")
        }
    }

    const { theme } = useTheme();

    return (
        <div id='themeBackground'>

            <Head>
                <title>Registre-se | Saúde em Mãos</title>
            </Head>

            <div className={styles.rowContainer}>

                <BannerWelcome />


                <form onSubmit={submit} className={`${styles.form} ${animate.upSlow}`}>

                    <div className={styles.legend}>
                        <h1>Registre-se</h1>
                        <p>Caso tenha uma conta, volte para
                            <Link href='/Login'> Login</Link>
                        </p>
                    </div>

                    <div className={styles.imageProfile}>
                        <img id="imageSRC"
                            src={(theme === 'light') ? "img/icons/userPurple.png" : "img/icons/userPurple4.png"}
                        />
                        <button type='button' onClick={upload}>
                            <input
                                id="uploadImage"
                                onChange={uploadFile}
                                type="file"
                            />

                            Selecinar Imagem
                        </button>

                    </div>


                    <div className={styles.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/userPurple.png" : "img/icons/userPurple4.png"} />
                        <input
                            onChange={e => setName(e.target.value)}
                            placeholder="Lurdes"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/userPurple.png" : "img/icons/userPurple4.png"} />
                        <input
                            onChange={e => setEmail(e.target.value)}
                            placeholder="lurdes@gmail.com"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/password.png" : "img/icons/password2.png"} />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="********"
                            required
                        />
                    </div>

                    <button type="submit">
                        <img src="img/icons/login.png" />
                        Registrar-se
                    </button>

                </form>
            </div>
        </div>

    );
};

export default Register;