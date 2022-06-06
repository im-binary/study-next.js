/** @type {import('next').NextConfig} */
const API_KEY = "c2aef405352f016e0b20433b2836cf20";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // 사용자가 source의 url로 들어오면 destination url로 redirects 해줌
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        // 사용자가 url이 변하는 것을 못 보게 할 수 있음
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
