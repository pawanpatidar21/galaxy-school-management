/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
        remotePatterns: [{ hostname: "images.pexels.com" }],
    },
    reactStrictMode: true,
    trailingSlash: false,  // Avoids 404 errors
    output: "standalone",  // Ensures all routes work
};

export default nextConfig;
