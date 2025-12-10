"use client"
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import NavBar from "./../components/NavBar/NavBar";
import PopUp from "./../components/PopUp/PopUp";
import Whatsapp from "./../components/Whatsapp/Whatsapp";
import SnowFall from './../components/Christmas/SnowFall/SnowFall';
import SantaClause from './../components/Christmas/SantaClause/SantaClause';
import { useEffect, useState } from "react";
import Loader from './../components/Loader/Loader';
import "./../components/Styles.css"
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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SMB4V5PHPS"></script>

<meta name="google-site-verification" content="_fzSw7AvxEVOEegIsVXVh_hADpiIXYjbD7XAe_l5WIk"/>

<script>
{`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SMB4V5PHPS');`}
</script>
      </head>
      <body>
        <SnowFall/>
        <SantaClause/>
        <NavBar />
        <main> {loading ? <Loader /> : children}</main>
        <PopUp />
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
