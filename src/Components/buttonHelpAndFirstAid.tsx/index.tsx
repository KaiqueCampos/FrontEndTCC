import Link from 'next/Link'
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss'

type ButtonHelpAndFirstAidProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    link: string;
    legend: string;
}

export function ButtonHelpAndFirstAid(props: ButtonHelpAndFirstAidProps) {
    return (
        <button
            className={styles.container}
            {...props}
        >
            <Link href={props.link}>
                <div>
                    {props.legend}
                </div>
            </Link>
        </button>
    )
}