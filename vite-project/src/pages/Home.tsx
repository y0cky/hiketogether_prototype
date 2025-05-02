import Infobar from '../components/Infobar'
import Header from '../components/Header'
import TourSection from '../components/TourSection'
import '../styles/index.css'
import '../styles/App.css'


type Props = {
  isUrban: boolean
  setIsUrban: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home({ isUrban, setIsUrban }: Props) {
  return (
    <>
      <Infobar isUrban={isUrban}/>
      <Header isUrban={isUrban} />
      <TourSection isUrban={isUrban} setIsUrban={setIsUrban} />
    </>
  )
}