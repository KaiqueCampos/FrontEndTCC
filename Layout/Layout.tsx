import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Layout;