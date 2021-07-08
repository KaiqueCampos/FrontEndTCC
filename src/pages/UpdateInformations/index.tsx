import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../Components/Header";
import { useTheme } from "../../hooks/useTheme";
import { parseCookies } from "../../utils/parseCookies";
import { errorNotification, sucessNotification } from "../../utils/ToastifyNotification";
import styles from './styles.module.scss';

const UpdateInformations = ({ req }) => {

    const {theme} = useTheme();

    // definition of variables
    const [adress, setAdress] = useState("");
    const [cep, setCep] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [chronicDisease, setChronicDisease] = useState("");

    const router = useRouter();

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
                adress: adress,
                cep: cep,
                phone: phone,
                age: age,
                weight: weight,
                height: height,
                chronicDisease: chronicDisease,
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
                <form onSubmit={submit}>
                    <h4>Endereço e Contato</h4>
                    <div className={styles.adressAndNumber}>
                        <input
                            type='text'
                            placeholder='Rua Armando Carvalho, 153'
                            onChange={(e) => setAdress(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='CEP: 05870-060'
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='(11) 95811-2645'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <h4>Informações Pessoais</h4>
                    <div className={styles.PersonalInformation}>
                        <input
                            type='text'
                            placeholder='Idade:'
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Peso:'
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Altura:'
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>

                    <h4>Possui alguma doença crônica?</h4>
                    <div className={styles.checkbox}>
                        <div>
                            <input type='checkbox' name="fooby[2][]" />
                        Sim
                    </div>

                        <div>
                            <input type='checkbox' name="fooby[2][]" />
                        Não
                    </div>
                    </div>
                    <textarea placeholder='Detalhe para a gente...' onChange={(e) => setChronicDisease(e.target.value)} />
                    <button type='submit'>Salvar Informações</button>
                </form>

            </div>
        </div >
    );
};

export default UpdateInformations;