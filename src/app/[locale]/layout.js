import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { UserProvider } from "@/context/UserContext";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {
  // Get the current locale from the params (defaults to 'en' if not provided)
  const { locale } = params;

  // Fetch the messages for the current locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <UserProvider>
        <NextIntlClientProvider messages={messages}>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </NextIntlClientProvider>
      </UserProvider>
    </html>
  );
}
