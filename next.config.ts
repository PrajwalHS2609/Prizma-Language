import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/online-german-language-course",
        destination: "/online-german-course-in-bangalore",
        permanent: true, // 308 redirect
      },
      {
        source: "/german-language-course-in-bangalore",
        destination: "/online-german-course-in-bangalore",
        permanent: true, // 308 redirect
      },
      {
        source: "/online-french-language-course/",
        destination: "/online-french-course-in-bangalore",
        permanent: true, // 308 redirect
      },
      {
        source: "/french-language-course-in-bangalore",
        destination: "/online-french-course-in-bangalore",
        permanent: true, // 308 redirect
      },
    ];
  },
};

export default nextConfig;
