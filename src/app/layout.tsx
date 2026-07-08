import { Poppins, Playfair_Display } from "next/font/google";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import ConditionalLayout from "./ConditionalLayout";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" className={`${poppins.className} ${playfair.variable}`}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ClientCommons />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        
        <Script
          id="google-translate-init"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        
        <style dangerouslySetInnerHTML={{ __html: `
          .goog-te-banner-frame.skiptranslate, .goog-te-gadget-icon { display: none !important; }
          body { top: 0px !important; }
          .goog-te-menu-value { display: none !important; }
          .goog-tooltip { display: none !important; }
          .goog-tooltip:hover { display: none !important; }
          .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
          #google_translate_element { display: none !important; }
          .skiptranslate { display: none !important; }
        ` }} />
      </body>
    </html>
  );
}
