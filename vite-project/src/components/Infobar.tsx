import { MapPin, Compass, Landmark } from 'lucide-react'

function InfoBar() {
  return (
    <div className="bg-green-800 text-white text-sm py-2 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-center">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4" />
          <span><strong>Beste Auswahl</strong> an einzigartigen Erlebnissen</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span><strong>Geführte Touren</strong> mit erfahrenen Guides</span>
        </div>
        <div className="flex items-center gap-2">
          <Landmark className="w-4 h-4" />
          <span><strong>Urban & Natur</strong> direkt in deiner Nähe</span>
        </div>
      </div>
    </div>
  )
}

export default InfoBar;
