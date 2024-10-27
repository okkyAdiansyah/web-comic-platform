import styles from '@/styles/components/elements/sliderEl.module.scss';

/**
 * Slider single bullet control
 * 
 * @prop number 'target' Control targeted slides when clicked
 * @prop callback 'OnClick' Control On click event handler
 */
const SliderBulletControl = ({onClick, isActive}) => {
    return(
        <button type="button" onClick={onClick} className={`${styles['sliderEl__control']} ${isActive}`}></button>
    )
}

export default SliderBulletControl;
