"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import NavBar from "./../components/NavBar/NavBar";
import PopUp from "./../components/PopUp/PopUp";
import Whatsapp from "./../components/Whatsapp/Whatsapp";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader/Loader";
import "./../components/Styles.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake loading for animation effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favIcon.png" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SMB4V5PHPS"
        ></script>

        <meta
          name="google-site-verification"
          content="_fzSw7AvxEVOEegIsVXVh_hADpiIXYjbD7XAe_l5WIk"
        />

        <script>
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SMB4V5PHPS');`}
        </script>

        {/* -----------------------------Review---------------------------------------- */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Prizma Academy",
            image:
              "https://prizmaacademy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.93a50bd6.png&w=750&q=75",
            description:
              "Prizma Academy is a well-renowned foreign language institute that provides online foreign language courses such as German, French, Japanese, Spanish, and many more. Whether you are learning languages online to study or work abroad or simply want to explore different cultures, you will find courses to assist you on your way.",
            brand: {
              "@type": "Thing",
              name: "Prizma Academy",
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Rishi",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "12792",
            },
          })}
        </script>

        {/* -----------------------------Business---------------------------------------- */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Prizma Academy",
            url: "https://prizmaacademy.com/",
            logo: "https://prizmaacademy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.93a50bd6.png&w=750&q=75",
            description:
              "Prizma Academy is a well-renowned foreign language institute offering online language courses including German, French, Japanese, Spanish, and more for students and working professionals.",
            sameAs: [
              "https://www.facebook.com/PrizmaAcademyfb",
              "https://www.instagram.com/prizmalanguageacademy/",
              "https://www.linkedin.com/company/prizmaacademy/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9538 60 8484",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "12792",
            },
          })}
        </script>
      </head>
      <body>
        <NavBar />
        <main> {loading ? <Loader /> : children}</main>
        <PopUp />
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
