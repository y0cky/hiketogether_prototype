import { Link } from 'react-router-dom'
import { ShoppingCart, User } from 'lucide-react'
import { motion } from "framer-motion"

type Props = {
  isUrban: boolean
}

export default function Header({ isUrban }: Props) {

  const backgroundUrl = isUrban

    ? `${import.meta.env.BASE_URL}urban_header.avif`
    : `${import.meta.env.BASE_URL}background.avif`

  return (
    <header
      className="relative h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      {/* Logo oben links */}
      <Link to="/" className="absolute top-4 left-4 z-20">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Hike Together Logo" className="h-18 w-auto" />
      </Link>

      {/* Login & Warenkorb oben rechts */}
      <div className="absolute top-4 right-4 flex items-center space-x-5 text-white z-20">
        <Link to="/login" className="hover:text-green-300 transition">
          <User className="w-7 h-7" />
        </Link>
        <Link to="/warenkorb" className="hover:text-green-300 transition">
          <ShoppingCart className="w-7 h-7" />
        </Link>
      </div>

      {/* Modernes Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />

      {/* Text-Inhalt zentriert */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <motion.h1
          className="text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Abenteuer verbindet
        </motion.h1>
        <p className="text-xl max-w-2xl leading-relaxed">
          Gemeinsam raus in die Natur – echte Erlebnisse, echte Menschen, echte Freundschaft.
        </p>
      </div>

      {/* Navigationsleiste unten */}
      <nav
  className={`absolute bottom-0 w-full backdrop-blur-md text-white shadow-md z-30 ${
    isUrban ? "bg-orange-800" : "bg-green-800"
  }`}
>  <div className="max-w-7xl mx-auto flex justify-center md:justify-center space-x-6 px-4 py-3 text-sm font-medium tracking-wide">
    <Link to="/" className="hover:text-green-200 transition-colors duration-200">Start</Link>
    <Link to="/touren" className="hover:text-green-200 transition-colors duration-200">Touren</Link>
    <Link to="/mitmachen" className="hover:text-green-200 transition-colors duration-200">Mitmachen</Link>
  </div>
</nav>
    </header>
  )
}