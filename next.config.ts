import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ allow Sanity images
  },

  async redirects() {
    return [
      {
        source: "/online-german-language-course",
        destination: "/online-german-course-in-bangalore",
        permanent: true,
      },
      {
        source: "/german-language-course-in-bangalore",
        destination: "/online-german-course-in-bangalore",
        permanent: true,
      },
      // -----------------------French---------------------------------------------
      {
        source: "/online-french-language-course/",
        destination: "/online-french-course-in-bangalore",
        permanent: true,
      },
      {
        source: "/french-language-course-in-bangalore",
        destination: "/online-french-course-in-bangalore",
        permanent: true,
      },
      // -------------------------Spanish-------------------------------------
      {
        source: "/online-spanish-language-course/",
        destination: "/online-spanish-course-in-bangalore",
        permanent: true,
      },
      {
        source: "/spanish-language-course-in-bangalore",
        destination: "/online-spanish-course-in-bangalore",
        permanent: true,
      },
      // ---------------------------------Italian-----------------------------------
      {
        source: "/online-italian-language-course/",
        destination: "/online-italian-course-in-bangalore",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
