'use client';

import { SearchFormAction } from "@/action/actions";
import { Button } from "@/components/elements/Button";
import { Nav } from "@/components/modules/Nav";
import SearchForm from "@/components/modules/SearchForm/SearchForm";
import useResponsive from "@/hooks/useResponsive";
import styles from '@/styles/components/blocks/header.module.scss';

/**
 * Site header
 */
const Header = () => {
    const { screenWidth } = useResponsive();

    return(
        <>
            <header className={styles['wrapper']}>
                <Nav.Desktop />
                <div className={styles['nav-cta-group']}>
                    <SearchForm 
                        action={'/search'}
                    />
                    <Button.CTA
                        href={'/auth/login'}
                        type={'button__cta--main'}
                        size={'button__cta--lg'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="white" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"/></svg>
                        Login
                    </Button.CTA>
                </div>
            </header> 
        </>
    )
}

export default Header;