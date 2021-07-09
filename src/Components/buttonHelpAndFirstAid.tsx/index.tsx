import Link from 'next/Link'
import styles from './styles.module.scss'

type ButtonHelpAndFirstAidProps = {
    link: string;
    legend: string;
}

export function ButtonHelpAndFirstAid(props: ButtonHelpAndFirstAidProps) {
    return (
        <div className={styles.container}>
            <Link href={props.link}>
                <div>
                    {props.legend}
                </div>
            </Link>
        </div>
    )
}