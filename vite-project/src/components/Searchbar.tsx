import { useState } from "react";
import { touren } from "./TourSection";

function Searchbar() {
  const [query, setQuery] = useState("");

  const filtered = touren.filter((touren) =>
    touren.titel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <input
        type="text"
        placeholder="Suche nach Aktivitäten..."
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="space-y-4">
        {filtered.map((a) => (
          <li key={a.id} className="bg-white p-4 rounded-xl shadow">
            {a.titel}
          </li>
        ))}
        {filtered.length === 0 && <p className="text-gray-500">Keine passenden Aktivitäten gefunden.</p>}
      </ul>
    </div>
  );
}

export default Searchbar;
