import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './../components/Footer/Footer';
import NavBar from './../components/NavBar/NavBar';
import PopUp from './../components/PopUp/PopUp';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <PopUp/>
        <Footer/>
      </body>
    </html>
  );
}
