import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";

import BannerWelcome from "../Components/bannerWelcome/bannerWelcome";
import OtherLoginOptions from "../Components/OtherLoginOptions/otherLoginOptions";

import styles from "../styles/pages/login_register.module.scss";
import animate from '../styles/animation/animation.module.css';
import { useCookies } from "react-cookie";
import Link from "next/Link";
import { useApp } from "../Contexts/AppContexts";
import { cssTransition, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [cookie, setCookie] = useCookies(["token"])

  toast.configure();

  const swirl = cssTransition({
    enter: "swirl-in-fwd",
    exit: "swirl-out-bck"
  });

  // definition of variables
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // login sucess or not
    if (response.status === 200) {

      // Set token
      const { token } = await response.json();
      setCookie("token", token, {
        path: "/",
        maxAge: 60 * 60 * 24, // Expires after 24hr
        sameSite: true,
      });

      toast.success("Bem-vindo ao nosso aplicativo!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        transition: swirl,
      });

      return router.push('/');

    } else {
      toast.error("Email ou senha incorretos, tente novamente...", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        transition: swirl,
      });
    }
  };

  const { theme } = useApp();

  return (
    <div className='container'>
      <div className={styles.rowContainer}>

        <BannerWelcome />

        <form onSubmit={submit} className={`${styles.form} ${animate.upSlow}`}>

          <div className={styles.legend}>
            <h1>Login</h1>
            <p>Caso não tenha uma conta...
        <Link href='/Register'> Registre-se</Link>
            </p>
          </div>

          <OtherLoginOptions />

          <div className={styles.inputContainer}>
            <img src={(theme === 'light') ? "img/icons/userPurple.png" : "img/icons/userPurple4.png"} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="lurdes@gmail.com"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <img src={(theme === 'light') ? "img/icons/password.png" : "img/icons/password2.png"} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="**********"
              required
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href='#'>Esqueceu a senha?</a>
          </div>

          <button type="submit">
            <img src="img/icons/login.png" />
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;