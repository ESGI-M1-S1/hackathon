/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:
            [{
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '/**',
            },{
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/**',
            }]
    },
};

export default nextConfig;
