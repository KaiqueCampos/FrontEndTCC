import FinalImage from '../Components/finalImage/finalImage';
import Header from '../Components/Header/header';
import Map from '../Components/Map/Map';
import styles from '../styles/pages/HospitalPage.module.scss';


export default function HospitalPage() {

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.main}>
                <div className={styles.hospitalInformations}>

                    <h1>Hospital Family</h1>

                    <div className={styles.hospitalContainer}>

                        {/* Hospital Images */}
                        <div className={styles.hospitalImages}>
                            <img src="https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/03/hospital-family-odcr-1.jpg" />

                            <div>
                                <img src="https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/03/hospital-family-odcr-1.jpg" />
                                <img src="https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/03/hospital-family-odcr-1.jpg" />
                                <img src="https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/03/hospital-family-odcr-1.jpg" />
                                <img src="https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/03/hospital-family-odcr-1.jpg" />
                                <img src="https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/03/hospital-family-odcr-1.jpg" />
                                <img src="https://www.precosplanosdesaude.com.br/wp-content/uploads/2019/03/hospital-family-odcr-1.jpg" />
                            </div>
                        </div>

                        {/* Adress Infos */}
                        <div className={styles.adressInformation}>
                            <h3>Hospital do Taboão</h3>
                            <p>Rua Ametista Carvalho, número: 3000 - São Paulo, Taboão da Serra</p>
                        </div>

                        {/* Especialidades */}
                        <div className={styles.specialties}>
                            <h3>Especialidades</h3>

                            <div>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                                <p>° Endocrinologista</p>
                            </div>
                        </div>

                        {/* Legenda */}
                        <p className={styles.contactLegend}>
                            Para entrar em contato com a intituição,
                            clique em ‘Entrar em contato’ que você será direcionado
                            para o Whatsapp do local.
                        </p>

                        <button>
                            <img src="/img/icons/whatsapp.png" alt="Entre em contato com" />
                            Entrar em contato
                        </button>
                    </div>

                </div>

                <div className={styles.mapContainer}>
                    <img src='img/backgrounds/mapBackgroundBlue.png' />
                    <Map />
                </div>
            </div>

            <FinalImage />
        </div>
    )
}