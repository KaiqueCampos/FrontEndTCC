import styles from './styles.module.scss'
import animate from '../../styles/animation.module.scss'

type TitlePageProps = {
    title: string;
    titleImageIcon: string;
}

export function TitlePage(props: TitlePageProps) {

    return (
        <div className={`${styles.container} ${animate.up}`}>
            <img src={props.titleImageIcon}/>
            {props.title}
        </div>
    )
}