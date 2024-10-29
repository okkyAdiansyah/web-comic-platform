import styles from '@/styles/components/elements/tabControl.module.scss';

/**
 * Tab control
 * 
 * @prop callback 'onClick' Click event handler for button
 * @prop boolean 'isActive' Button state for styling purpose
 * @prop string 'content' HTML inner text for button
 */
const TabControl = ({onClick, isActive, content}) => {
    return(
        <>
            <button 
                type="button" 
                onClick={onClick}
                className={`${isActive ? styles['isActive'] : ''} ${styles['default']}`}
            >
                {content}
            </button>
        </>
    )
};

export default TabControl;