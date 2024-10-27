/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-my-sample-porto.pantheonsite.io',
                pathname: '/wp-content/uploads/**'
            }
        ]
    }
};

export default nextConfig;