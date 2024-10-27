import Link from "next/link";
import styles from '@/styles/components/elements/button.module.scss';

/**
 * Call-to-Action button with dynamic type and size
 * 
 * @prop URL 'href' Link url
 * @prop string 'size' Button size small, medium, large
 * @prop string 'type' Button type main & secondary
 */
const CTA = ({href, size, type, children}) => {
    return(
        <Link
            href={href}
            className={`${styles['button__cta']} ${styles[size]} ${styles[type]}`}
        >
            {children}
        </Link>
    )
}

export default CTA;