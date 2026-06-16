import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const deva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-deva",
});

export const metadata = {
  title: "Shri Sidhbali Baba Dham | श्री सिद्धबली बाबा धाम, कोटद्वार",
  description:
    "Official-style devotional website of Shri Sidhbali Baba Dham, Kotdwar, Uttarakhand. Darshan timings, location guide, aarti, chalisa, bhajan, photo gallery and more.",
  alternates: { languages: { en: "/", hi: "/" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={`${inter.variable} ${deva.variable}`}>
      <body>
        <LanguageProvider>
          <TopBar />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
