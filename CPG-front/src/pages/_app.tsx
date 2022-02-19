import { Header } from '../components/Header'
import '../styles/global.scss'
import 'swiper/scss';



import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    
    </>
  )
}

export default MyApp
