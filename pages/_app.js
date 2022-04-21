import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleReactLightbox from "simple-react-lightbox";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
