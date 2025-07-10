import Footer from "../_components/Footer/footer";
import Navbar from "../_components/NavBar";

export default function MainLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
