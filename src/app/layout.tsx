"use client";

import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Toaster } from "react-hot-toast";

const merriWeather = Merriweather_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-color-mode="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={merriWeather.className}>
        <Toaster
          toastOptions={{
            className: "toast_custom"
          }} />
        <Provider store={store}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Provider>

      </body>
    </html>
  );
}
