import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Oswald, Manrope } from "next/font/google";
import localFont from 'next/font/local'

const custom = localFont({
  src: '../public/fonts/SAMAN___.woff',
  variable: '--font-custom',
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={`${oswald.variable} font-sans ${custom.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
