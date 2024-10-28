import styles from '@/styles/components/modules/Cards/cards.module.scss';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Popular weekly single card
 * 
 * @prop string 'seriesTitle' Series title coming from series data
 * @prop URL 'href' Series route to single series page
 */
const PopularSingleCard = ({seriesData = {title: '', titleSlug : '', coverUrl: ''}}) => {
    const {title, titleSlug, coverUrl} = seriesData;
    
    return(
        <>
            <Link href={`/series/${titleSlug}`} className={styles['popular-single']}>
                <div className={styles['popular-single__bg']}>
                    <Image
                        src={coverUrl ? coverUrl : null}
                        alt={`this-week-popular-${titleSlug}`}
                        width={175}
                        height={280}
                    />
                </div>
                <div className={styles['popular-single__content-overlay']}>
                    <div className={styles['popular-single__crown']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"><path fill="#f1e05a" d="m20.092 14.326l.193-1.894c.103-1.011.17-1.678.117-2.099h.02c.871 0 1.578-.746 1.578-1.666S21.293 7 20.421 7s-1.579.746-1.579 1.667c0 .416.145.797.384 1.089c-.343.223-.792.695-1.468 1.405c-.52.547-.78.82-1.07.863a.84.84 0 0 1-.473-.07c-.268-.124-.447-.462-.804-1.139L13.527 7.25c-.22-.417-.405-.766-.572-1.047c.683-.368 1.15-1.117 1.15-1.98C14.105 2.994 13.163 2 12 2s-2.105.995-2.105 2.222c0 .864.467 1.613 1.15 1.98c-.167.282-.351.631-.572 1.048L8.59 10.816c-.358.676-.537 1.014-.805 1.139a.84.84 0 0 1-.473.07c-.29-.043-.55-.317-1.07-.864c-.676-.71-1.125-1.182-1.468-1.405c.24-.292.384-.673.384-1.09C5.158 7.747 4.45 7 3.578 7C2.708 7 2 7.746 2 8.667c0 .92.707 1.666 1.579 1.666h.019c-.054.42.014 1.088.117 2.099l.193 1.894c.107 1.051.196 2.051.306 2.952h15.572c.11-.9.199-1.901.306-2.952M10.855 22h2.29c2.985 0 4.478 0 5.474-.94c.434-.412.71-1.152.908-2.116H4.473c.198.964.473 1.704.908 2.115C6.377 22 7.87 22 10.855 22"/></svg>
                    </div>
                    <div className={styles['popular-single__head']}>
                        <strong>
                            Trending
                        </strong>
                        <p>
                            This week
                        </p>
                    </div>
                    <p className={styles['popular-single__series-title']}>
                        {title}
                    </p>
                </div>
            </Link>
        </>
    )
};

export default PopularSingleCard;