import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import NavBar from "./../components/NavBar/NavBar";
import PopUp from "./../components/PopUp/PopUp";
import Whatsapp from "./../components/Whatsapp/Whatsapp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <NavBar />
        {children}
        <PopUp />
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
