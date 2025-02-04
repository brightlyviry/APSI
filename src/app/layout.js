import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBubbles from "@/components/FloatingBubbles";
import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";
export const metadata = {
  title: "APSI - UMKM Sampah Indonesia",
  description: "Laman Resmi Asosiasi Pengusaha Sampah Indonesia",
  icons: { icon: "favicon.ico" }
};
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="id">
      <body className="bg-white text-gray-800 relative">
        <Navbar />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
