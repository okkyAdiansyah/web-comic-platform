import Header from '@/components/blocks/Header/Header';
import '../styles/global.scss';

/**
 * @var {metadata} metadata Site main metadata for SEO
 */
export const metadata = {
    title: "Web Comic Platform",
    description: "Web comic reading platform. Read latest and most popular comic from manga, manhwa, and manhua in english translation",
}

const RootLayout = ({children}) => {
    return(
        <html>
            <body>
                <div className='wrapper'>
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout;