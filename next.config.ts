import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {unoptimized: true},
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
