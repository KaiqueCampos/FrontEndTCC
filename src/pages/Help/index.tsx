import React from "react";
import Header from "../../Components/Header";
import styles from './styles.module.scss';

const Help = () => {

    return (
        <div id='themeBackground'>
            <div className="main">
                <Header />

                <div className={styles.container}>

                    <div className={styles.titlePage}>
                        <img src='/img/icons/help.png' />
                        Ajuda
                    </div>

                    <div className={styles.helpItems}>
                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Help;