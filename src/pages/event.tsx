import React, { useState } from "react";
import Layout from "../Layout/Layout";

const Event = () => {
    //Variables
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    async function teste() {

        // Get token in LocalStorage
        const token = localStorage.getItem('token')

        // API connection
        const indexLogged = await fetch('http://localhost:3333/index', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        // Get JSON information and save in variables line (7-9)
        const indexInformationJSON = await indexLogged.json();

        setId(indexInformationJSON.id);
        setUsername(indexInformationJSON.username);
        setEmail(indexInformationJSON.email);

        return indexInformationJSON;
    }

    teste()

    return (
        <Layout>
            <h1>Welcome to page {username}</h1>
            <h1>Your Email is: {email}</h1> 
            <h1>id: {id}</h1>
        </Layout>
    );
};

export default Event;