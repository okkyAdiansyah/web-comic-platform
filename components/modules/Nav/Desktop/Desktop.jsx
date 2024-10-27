'use client';

import NavLink from "@/components/elements/NavLink/NavLink";
import styles from "@/styles/components/modules/Nav/desktop.module.scss";

/**
 * Desktop navigation
 */
const Desktop = () => {
    /**
     * @var Object[] navRoutes Array of object
     *                         containing nav route name and route
     */
    let navRoutes = [
        {
            routeName: 'Home',
            route: '/'
        },
        {
            routeName: 'Bookmarks',
            route: '/bookmarks'
        },
        {
            routeName: 'Comics',
            route: '/comic'
        }
    ];

    return(
        <>
            <nav className={styles['nav-container']}>
                <ul className={styles['nav-item-container']}>
                    {navRoutes.map((route, index) =>
                        (
                            <NavLink
                                key={`nav-link-${index}`}
                                href={route.route}
                                content={route.routeName}
                            />
                        )
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Desktop