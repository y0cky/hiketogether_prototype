import { useState } from "react"
import ThemeSwitchButton from './ThemeSwitchButton';


export const natur_touren = [
  {
    id: 1,
    titel: "Burgenwanderung Pfälzerwald",
    bildStill: `${import.meta.env.BASE_URL}pfaelzerwald.jpg`,
    bildAnimation: `${import.meta.env.BASE_URL}images/burgen_animated.gif`,
    preis: "18€",
    gruppenanzahl: "Gruppenanzahl: 8",
  },
  {
    id: 2,
    titel: "Felsenpfade & Fernblicke",
    bildStill: `${import.meta.env.BASE_URL}felsenpfade.PNG`,
    bildAnimation: `${import.meta.env.BASE_URL}felsenpfade.gif`,
    preis: "22€",
    gruppenanzahl: "Gruppenanzahl: 10",
  },
  {
    id: 3,
    titel: "Odenwald auf leisen Pfaden",
    bildStill: `${import.meta.env.BASE_URL}odenwald.jpg`,
    bildAnimation: `${import.meta.env.BASE_URL}images/burgen_animated.gif`,
    preis: "14€",
    gruppenanzahl: "Gruppenanzahl: 14",
  },
  {
    id: 4,
    titel: "Wald & Wein: Genusswandern bei Bad Dürkheim",
    bildStill: `${import.meta.env.BASE_URL}waldundweinbaddurkheim.jpg`,
    bildAnimation: `${import.meta.env.BASE_URL}images/burgen_animated.gif`,
    gruppenanzahl: "Gruppenanzahl: 10",
    preis: "25€",
  },
  {
    id: 5,
    titel: "Donnersberg-Expedition",
    bildStill: `${import.meta.env.BASE_URL}donnersberg.jpg`,
    bildAnimation: `${import.meta.env.BASE_URL}images/burgen_animated.gif`,
    gruppenanzahl: "Gruppenanzahl: 12",
    preis: "18€",
  },
  {
    id: 6,
    titel: "Heidelberg bei Vollmond",
    bildStill: `${import.meta.env.BASE_URL}VollmondHeidelberg.webp`,
    bildAnimation: `${import.meta.env.BASE_URL}images/burgen_animated.gif`,
    gruppenanzahl: "Gruppenanzahl: 14",
    preis: "20€",
  },
]

export const urban_touren = [
  {
    id: 1,
    titel: "Street Art Walk Mannheim",
    bildStill: `${import.meta.env.BASE_URL}urban_streetart.jpg`,
    bildAnimation: `${import.meta.env.BASE_URL}images/urban_animated.gif`,
    preis: "15€",
    gruppenanzahl: "Gruppenanzahl: 10",
  },
  {
    id: 2,
    titel: "Architektur & Parks in Heidelberg",
    bildStill: `${import.meta.env.BASE_URL}architektur_heidelberg.png`,
    bildAnimation: `${import.meta.env.BASE_URL}images/urban_animated.gif`,
    preis: "20€",
    gruppenanzahl: "Gruppenanzahl: 12",
  },

  {
    id: 3,
    titel: "Kneipentour",
    bildStill: `${import.meta.env.BASE_URL}kneipentour.jpg`,
    bildAnimation: `${import.meta.env.BASE_URL}images/urban_animated.gif`,
    preis: "20€",
    gruppenanzahl: "Gruppenanzahl: 12",
  },
]

type Props = {
  isUrban: boolean
  setIsUrban: React.Dispatch<React.SetStateAction<boolean>>
}

function TourenSection({ isUrban, setIsUrban }: Props) {
  const [query, setQuery] = useState("")

  const touren = isUrban ? urban_touren : natur_touren
  const filteredTouren = touren.filter((tour) =>
    tour.titel.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Suchfeld + Toggle */}
      <div className="max-w-3xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder={`Suche nach ${isUrban ? "urbanen" : "Natur"}-Touren...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-2/3 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-700"
        />
  <div className="ml-4">
          <ThemeSwitchButton isUrban={isUrban} setIsUrban={setIsUrban} />
  </div>

      </div>

      {/* Karten-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredTouren.map((tour) => (
          <TourCard
            key={tour.id}
            titel={tour.titel}
            bildStill={tour.bildStill}
            bildAnimation={tour.bildAnimation}
            preis={tour.preis}
            gruppenanzahl={tour.gruppenanzahl}
          />
        ))}
        {filteredTouren.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Keine Touren gefunden.
          </p>
        )}
      </div>
    </div>
  )
}

function TourCard({
  titel,
  bildStill,
  bildAnimation,
  preis,
  gruppenanzahl,
}: any) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transform transition duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
        <img
          src={hovered ? bildAnimation : bildStill}
          alt={titel}
          className="object-cover w-full h-full transition duration-300"
        />
      </div>

      <h2 className="text-xl font-semibold text-center mb-2 text-gray-800">
        {titel}
      </h2>

      <div className="flex justify-between text-sm text-gray-600 mb-4 px-1">
        <span>{preis}</span>
        <span>{gruppenanzahl}</span>
      </div>

      <button className="mt-auto bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 shadow-md transition-all">
        Mehr erfahren
      </button>
    </div>
  )
}

export default TourenSection
