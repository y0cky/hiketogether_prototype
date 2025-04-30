import Infobar from '../components/Infobar'
import Header from '../components/Header'
import TourSection from '../components/TourSection'
import '../styles/index.css'
import '../styles/app.css'


export default function Home() {
  return (
    <>
      <Infobar />
      <Header />
      <TourSection />
    </>
  );
}