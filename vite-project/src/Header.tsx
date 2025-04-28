function Header() {
    return (
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/background.avif')` }}>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4">Abenteuer verbindet</h1>
          <p className="text-xl">Gemeinsam raus in die Natur – echte Erlebnisse, echte Menschen, echte Freundschaft.</p>
        </div>
  
        <nav className="absolute bottom-0 w-full bg-green-700 text-white flex justify-center space-x-8 py-4">
          <a href="#touren" className="hover:underline">Geführte Touren</a>
          <a href="#community" className="hover:underline">Community-Abenteuer</a>
          <a href="#mitmachen" className="hover:underline">Mitmachen</a>
        </nav>
      </header>
    );
  }
  
  export default Header;
  