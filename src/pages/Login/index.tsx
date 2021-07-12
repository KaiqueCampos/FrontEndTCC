import Link from "next/Link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import { useCookies } from "react-cookie";
import 'react-toastify/dist/ReactToastify.css';
import BannerWelcome from "../../Components/bannerWelcome";
import OtherLoginOptions from "../../Components/OtherLoginOptions";
import { useTheme } from "../../hooks/useTheme";
import animate from '../../styles/animation.module.scss';
import styles from "../../styles/login_register.module.scss";
import { errorNotification, sucessNotification } from "../../utils/ToastifyNotification";


const Login = () => {
  const [cookie, setCookie] = useCookies(["token"])

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

      sucessNotification("Bem-vindo ao nosso aplicativo!")
      return router.push('/');

    } else {
      errorNotification("Email ou senha incorretos, tente novamente...")
    }
  };

  const { theme } = useTheme();

  return (
    <div id='themeBackground'>
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