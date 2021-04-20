import { createContext, ReactNode, useState } from 'react';


interface UserContextData {
    username: string;
    token: string;
    getName: () => void;
    getToken: () => void;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
    const [username, setUsername] = useState('');
    const [areLogged, setAreLogged] = useState(false)
    const [token, setToken] = useState('');

    async function Index() {

        try {
    
          // API connection
          const response = await fetch('http://localhost:3333/index', {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
    
          // Get JSON information and save in variables line (7-9)
          const data = await response.json();
          return setAreLogged(true);
    
        } catch {
          setAreLogged(false)
        }
    
      }

    function getToken(){
        setToken(localStorage.getItem('token'))
    }

    function getName() {
       setUsername("Kaique")
    }

    return (
        <UserContext.Provider
            value={{
                username,
                token,
                getName,
                getToken
            }}
        >
            {children}
        </UserContext.Provider>
    )
}