import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../Components/Header";
import { useTheme } from "../../hooks/useTheme";
import { parseCookies } from "../../utils/parseCookies";
import { errorNotification, sucessNotification } from "../../utils/ToastifyNotification";
import styles from './styles.module.scss';
import formStyle from '../../styles/login_register.module.scss';
import Head from "next/Head";


const UpdateInformations = ({ req }) => {

    const { theme } = useTheme();

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

    // submit function
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const token = parseCookies(req).token;

        // API connection
        const response = await fetch("http://localhost:3333/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': ` Bearer ${token}`
            },
            body: JSON.stringify({
                username: name,
                password: password,
                imagePerfil: imagePerfil,
            }),
        });

        // response sucess or not
        if (response.status === 200) {
            sucessNotification("Dados atualizados com sucesso!")
            return router.push('/');

        } else {
            errorNotification("Não foi possível atualizar os dados, tente novamente...")
        }
    };

    return (
        <div className={styles.container} id={theme}>
            <Header />

            <Head>
                <title>Atualizar informações | Saúde em Mãos</title>
            </Head>

            <div className={styles.banner}>

                <img src="/img/icons/logo.png" />
                <p>
                    O preenchimento das seguintes informações são opcionais,
                    elas servem para agilizar o preenchimento dos formulários
                    de consulta e uma melhor usabilidade do site.
                </p>

                <div className={styles.backgroundImage} />

            </div>

            <div className={styles.informations}>
                <form onSubmit={submit} className={`${formStyle.form}`}>

                    <div id='imageProfileContainer' className={formStyle.imageProfile}>
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


                    <div className={formStyle.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/userPurple.png" : "img/icons/userPurple4.png"} />
                        <input
                            onChange={e => setName(e.target.value)}
                            placeholder="Lurdes"
                        />
                    </div>

                    <div className={formStyle.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/password.png" : "img/icons/password2.png"} />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="********"
                        />
                    </div>

                    <button type="submit">
                        Atualizar
                    </button>

                </form>

            </div>
        </div >
    );
};

export default UpdateInformations;