import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleReactLightbox from "simple-react-lightbox";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import WhatsupButton from "../components/WhatsupButton/WhatsupButton";

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <SimpleReactLightbox>
        <Component {...pageProps} />
        <WhatsupButton />
      </SimpleReactLightbox>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
