
import { parseCookies } from '../utils/parseCookies';

import { MenuItems } from '../Components/MenuItens';
import NotLogged from '../Components/NotLogged';
import { HomeHeader } from '../Components/HomeHeader';

import styles from '../styles/home.module.scss';

type HomeProps = {
    isLogged: boolean;
    username?: string;
    imagePerfil?: string;
}

export default function Home(props : HomeProps) {

  return (
    <>
      {props.isLogged ? (

        <div id='container1'>
          <div className={styles.container}>
            <HomeHeader
              username={props.username}
              imageProfile={props.imagePerfil}
            />

            <MenuItems />
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
  const { token } = parseCookies(req);

  // API connection
  const response = await fetch('http://localhost:3333/showUser', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.status === 200) {
    const { username, imagePerfil } = await response.json();

    return {
      props: {
        isLogged: true,
        username: username.charAt(0).toUpperCase() + username.slice(1),
        imagePerfil: imagePerfil
      }
    }

  } else
    return {
      props: {
        isLogged: false,
      }
    }
}
