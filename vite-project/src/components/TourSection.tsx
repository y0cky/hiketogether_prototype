import { useState } from "react";

export const touren = [
  {
    id: 1,
    titel: "Burgenwanderung Pfälzerwald",
    bildStill: "/burgwanderung1.jpg",
    bildAnimation: "/images/burgen_animated.gif",
    preis: "18€",
    gruppenanzahl: "Gruppenanzahl: 8"

  },
  {
    id: 2,
    titel: "Felsenpfade & Fernblicke",
    bildStill: "/images/burgen_still.jpg",
    bildAnimation: "/images/burgen_animated.gif",
    preis: "22€",
    gruppenanzahl: "Gruppenanzahl: 10"

  },
  {
    id: 3,
    titel: "Odenwald auf leisen Pfaden",
    bildStill: "/images/burgen_still.jpg",
    bildAnimation: "/images/burgen_animated.gif",
    preis: "14€",
    gruppenanzahl: "Gruppenanzahl: 14"
  },
  {
    id: 4,
    titel: "Wald & Wein: Genusswandern bei Bad Dürkheim",
    bildStill: "/images/burgen_still.jpg",
    bildAnimation: "/images/burgen_animated.gif",
    gruppenanzahl: "Gruppenanzahl: 10",
    preis: "25€"

  },
  {
    id: 5,
    titel: "Donnersberg-Expedition",
    bildStill: "/images/burgen_still.jpg",
    bildAnimation: "/images/burgen_animated.gif",
    gruppenanzahl: "Gruppenanzahl: 12",
    preis: "18€"
  },
  {
    id: 6,
    titel: "Heidelberg bei Vollmond",
    bildStill: "/images/burgen_still.jpg",
    bildAnimation: "/images/burgen_animated.gif",
    gruppenanzahl: "Gruppenanzahl: 14",
    preis: "20€"

  },
];

function TourenSection() {
  const [query, setQuery] = useState("");

  //Filterfunktion
  const filteredTouren = touren.filter((tour) =>
    tour.titel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      {/* Suchfeld */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Suche nach Touren..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </div>

      {/* Gefilterte Tour-Karten */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredTouren.map((tour, index) => (
          <TourCard
            key={index}
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
  );
}

function TourCard({ titel, bildStill, bildAnimation, preis, gruppenanzahl}: any) {
  const [hovered, setHovered] = useState(false);

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
      
      <h2 className="text-xl font-semibold text-center mb-2 text-gray-800">{titel}</h2>

{/* Preis + Gruppengröße in einer Zeile */}
<div className="flex justify-between text-sm text-gray-600 mb-4 px-1">
  <span>{preis}</span>
  <span>{gruppenanzahl}</span>
</div>
      <button className="mt-auto bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 shadow-md transition-all">
        Mehr erfahren
      </button>
    </div>
  );
}

export default TourenSection;
