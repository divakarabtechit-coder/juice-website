/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  allowedDevOrigins: ['192.168.1.11', 'localhost:3000', '127.0.0.1:3000'],
};

export default nextConfig;
