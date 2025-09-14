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
// -----------------------French---------------------------------------------
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
// -------------------------Spanish-------------------------------------
      {
        source: "/online-spanish-language-course/",
        destination: "/online-spanish-course-in-bangalore",
        permanent: true, // 308 redirect
      },
      {
        source: "/spanish-language-course-in-bangalore",
        destination: "/online-spanish-course-in-bangalore",
        permanent: true, // 308 redirect
      },
// ---------------------------------Italian-----------------------------------
      {
        source: "/online-italian-language-course/",
        destination: "/online-italian-course-in-bangalore",
        permanent: true, // 308 redirect
      },
    ];
  },
};

export default nextConfig;
