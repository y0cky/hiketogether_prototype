import {useState} from 'react'


const touren = [
    {
      titel: "Burgenwanderung Pfälzerwald",
      bildStill: "/burgwanderung0.jpg",
      bildAnimation: "/images/burgen_animated.gif",
    },
    {
      titel: "Felsenpfade & Fernblicke",
      bildStill: "/images/burgen_still.jpg",
      bildAnimation: "/images/burgen_animated.gif",
 
    },
    {
      titel: "Odenwald auf leisen Pfaden",
      bildStill: "/images/burgen_still.jpg",
      bildAnimation: "/images/burgen_animated.gif",
    },
    {
      titel: "Wald & Wein: Genusswandern bei Bad Dürkheim",
      bildStill: "/images/burgen_still.jpg",
      bildAnimation: "/images/burgen_animated.gif",
   
    },
    {
      titel: "Donnersberg-Expedition",
      bildStill: "/images/burgen_still.jpg",
      bildAnimation: "/images/burgen_animated.gif",
    },
    {
      titel: "Heidelberg bei Vollmond",
      bildStill: "/images/burgen_still.jpg",
      bildAnimation: "/images/burgen_animated.gif",

    },
    // HIER KANNST DU JEDERZEIT MEHR TOUREN HINZUFÜGEN!
  ];
  function TourenSection() {
    
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Geführte Touren von Guides
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {touren.map((tour, index) => (
          <TourCard
            key={index}
            titel={tour.titel}
            bildStill={tour.bildStill}
            bildAnimation={tour.bildAnimation}
          />
        ))}
      </div>
    </div>
  );
}


function TourCard({ titel, bildStill, bildAnimation }: any) {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transform transition duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
        <img
          src={hovered ? bildAnimation : bildStill}
          alt={titel}
          className="object-cover w-full h-full transition duration-300"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{titel}</h2>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
        Mehr erfahren
      </button>
    </div>
  );
}

export default TourenSection;
  