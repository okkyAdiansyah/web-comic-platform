import { useState, useEffect, useRef } from "react";

/**
 * Hooks retrieving screen width for responsiveness
 * 
 * @param number debouncDelay Default debounce delay time in ms
 * 
 * @return {screenWidth: number}
 */
const useResponsive = (debounceDelay = 500) => {
    let timeoutRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(500);

    /**
     * To handle window resize event with debounce 
     * To prevent excessive re-render on everytime user resize window
     */
    const handleResize = () => {
        // Clear previous timeout to prevent from memory leaks on re-render, if exists
        if(timeoutRef.current) clearTimeout(timeoutRef.current);

        // Set screenWidth on resize with debouncing
        timeoutRef.current = setTimeout(() => {
            setScreenWidth(window.innerWidth);
        }, debounceDelay);
    };

    useEffect(() => {

        window.addEventListener('resize', handleResize);

        // Inital state value
        handleResize();

        // Clean up unused event listener and timeout
        return () => {
            window.removeEventListener('resize', handleResize);
            if(timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    }, [debounceDelay]);

    return {screenWidth};
}

export default useResponsive;
