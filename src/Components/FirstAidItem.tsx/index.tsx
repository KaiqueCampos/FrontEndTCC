import Link from 'next/Link'
import styles from './styles.module.scss'

type FirstAidItemsProps = {
    link: string;
    firstAidType: string;
}

export function FirstAidItems(props: FirstAidItemsProps) {
    return (
        <div className={styles.container}>
            <Link href={props.link}>
                <div>
                    {props.firstAidType}
                </div>
            </Link>
        </div>
    )
}