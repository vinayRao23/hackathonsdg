import "font-awesome/css/font-awesome.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <script
        async
        src="https://cse.google.com/cse.js?cx=a4f4b5764b60b450b"
      ></script>
    </>
  );
}
