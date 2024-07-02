/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    },
  },
  trailingSlash: true,
};

export default nextConfig;
