/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        remotePatterns: [
            { hostname: '*.digitaloceanspaces.com' },
            { hostname: '*.figma.com' },
            { hostname: '*.unsplash.com' },
        ],
    },
};

module.exports = nextConfig;
