import React, { SyntheticEvent } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from 'next/router';
import styles from '../styles/pages/Register.module.css';
import { useState } from 'react';


const Register = () => {

    //const {data} = useContext(ChallengesContext)

    // definition of variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // submit function
    const submit = async (e: SyntheticEvent) => {

        e.preventDefault();

        // API connection
        const register = await fetch('http://localhost:3333/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: name,
                email: email,
                password: password
            })
        });

        const data = await register.json();
        const dataConvert = JSON.stringify(data);
        console.log(dataConvert)
        
        return router.push('/Login')
    }

    return (
        <Layout>

            <form onSubmit={submit} className={styles.form}>

                <h1>Registre-se</h1>
                <div className={styles.inputContainer}>
                    <img src="img/userPurple.png" />
                    <input
                        onChange={e => setName(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <img src="img/userPurple.png" />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>

                <div className={styles.inputContainer}>
                    <img src="img/password.png" />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>



                <button type="submit">
                    <img src="img/login.png" />
                    Criar Usuário
                    </button>



            </form>

        </Layout>

    );
};

export default Register;