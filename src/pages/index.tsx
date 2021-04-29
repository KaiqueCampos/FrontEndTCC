import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import { useState } from 'react';
import header from '../Components/Header/styles.module.scss';
import NotLogged from '../Components/NotLogged/notLogged';
import animate from '../styles/animation/animation.module.css';
import styles from '../styles/pages/index.module.scss';
import { parseCookies } from '../utils/parseCookies';

export default function Home(props) {

  function logout() {
    localStorage.clear()
    document.location.reload(true);
  }

  return (
    <>
      {props.isLogged ? (<div className='container'>
        <div className='containerBackground'>

          <div className={`${header.container}`}>
            <div>
              <img src='/img/teste.jpg' />
              <h3>{props.username}</h3>
            </div>
          </div>

          <div className={`${styles.menuContainer}`}>

            <div className={`${animate.up} ${styles.menuItem}`}>
              <a href="/Emergency">
                <div>
                  <img src='img/icons/emergency.png' />
                  Emergência
                </div>
              </a>
            </div>

            <div className={`${animate.up} ${styles.menuItem}`}>
              <a href="/Medicines">
                <div>
                  <img src='img/icons/medicine.png' />
                  Remédios
                </div>
              </a>
            </div>

            <div className={`${animate.up} ${styles.menuItem}`}>
              <a href="Appointment">
                <div>
                  <img src='img/icons/consultas.png' />
                  Consultas
                </div>
              </a>
            </div>

            <div className={`${animate.upSlow} ${styles.menuItem}`}>
              <a href="Recipes">
                <div>
                  <img src='img/icons/recipe.png' />
                  Receitas
                </div>
              </a>
            </div>

            <div className={`${animate.upSlow} ${styles.menuItem}`}>
              <a href="FirstAid">
                <div>
                  <img src='img/icons/firstAid.png' />
                  Socorros
                </div>
              </a>
            </div>

            <div className={`${animate.upSlow} ${styles.menuItem}`}>
              <a href="Help">
                <div>
                  <img src='img/icons/help.png' />
                  Ajuda
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      ) : (
        <NotLogged />
      )}
    </>
  )
}

export async function getServerSideProps({ req }) {

  //get token on cookies
  const { token } = parseCookies(req)

  // API connection
  const response = await fetch('http://localhost:3333/index', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.status === 200) {
    const { username } = await response.json();

    return {
      props: {
        isLogged: true,
        username: username
      }
    }

  } else
    return {
      props: {
        isLogged: false
      }
    }
}
