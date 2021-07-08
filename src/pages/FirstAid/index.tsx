import React from "react";
import Link from "next/Link";
import Header from "../../Components/Header";
import styles from './styles.module.scss';

const FirstAid = () => {

    return (
        <div id='container1'>
            <div className="main">
                <Header />

                <div className={styles.container}>

                    <div className='titlePage'>
                        <img src='/img/icons/firstAid.png' />
                        Primeiros Socorros
                    </div>

                    <div className={styles.firstAidItems}>
                        <Link href="FirstAidPage">
                            <div>
                                Desmaio
                            </div>
                        </Link>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstAid;