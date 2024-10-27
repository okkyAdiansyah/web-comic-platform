import styles from '@/styles/components/elements/navLink.module.scss';
import Link from 'next/link';

/**
 * Nav Link Elements
 * 
 * @prop URL 'href' URL for Link href attribute
 * @prop string 'content' Route name
 */
const NavLink = ({href, content}) => {
    return(
        <>
            <li className={styles['container']}>
                <Link
                    href={href}
                    className={styles['__link']}
                >
                    {content}
                </Link>
            </li>
        </>
    )
}

export default NavLink;