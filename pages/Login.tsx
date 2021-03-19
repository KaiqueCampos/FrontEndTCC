import React, { SyntheticEvent, useState } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";
import styles from "../styles/pages/Register.module.css";
import { stringify } from "node:querystring";

const Login = () => {
  // definition of variables
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    const login = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(login)

    // login sucess or not
    if (login.status === 200) {

      // Get token
      const {token} = await login.json();   
      console.log(token)
      localStorage.setItem('token', token);
      
      return router.push('/event');
    } else {
      window.alert("Login Incorreto!")
    }
  };

  return (
    <Layout>
      <form onSubmit={submit} className={styles.form}>
        <h1>Login</h1>

        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setPassword(e.target.value)}
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

export default Login;