import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./../components/Footer/Footer";
import NavBar from "./../components/NavBar/NavBar";
import PopUp from "./../components/PopUp/PopUp";
import Whatsapp from './../components/Whatsapp/Whatsapp';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
      </head>
      <body>
        <NavBar />
        {children}
        <PopUp />
        <Whatsapp/>
        <Footer />
      </body>
    </html>
  );
}
