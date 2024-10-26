import '@/styles/global.scss';

/**
 * @const {metadata} metadata Site main metadata for SEO
 */
export const metadata = {
    title: "Web Comic Platform",
    description: "Web comic reading platform. Read latest and most popular comic from manga, manhwa, and manhua in english translation",
}

const RootLayout = ({children}) => {
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
}

export default RootLayout;