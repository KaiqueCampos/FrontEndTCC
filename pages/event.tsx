import React, { SyntheticEvent, useState } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";
import styles from "../styles/pages/Register.module.css";

const Event = () => {
    // definition of variables
    async function teste() {
        // API connection
        const login = await fetch("http://localhost:3333/api/index");
        const loginToken = await login.json()
        return console.log(loginToken)
    }

    return (
        <Layout>
            <button onClick={teste}>clique aqui</button>
        </Layout>
    );
};

export default Event;