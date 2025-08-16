import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WOWInit from "./wow-init";



export const metadata = {
  title: "Morteguard",
  description: "Morteguard Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          defer
        ></script>
      </head>
      <body>
        <WOWInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
