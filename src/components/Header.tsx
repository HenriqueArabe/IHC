
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-bold text-xl text-eco-light tracking-wide">
            Sustentabilidade<span className="text-white">Transparente</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-eco-light transition-colors">
            Início
          </Link>
          <Link to="/agua" className="text-white hover:text-eco-light transition-colors">
            Água
          </Link>
          <Link to="/energia" className="text-white hover:text-eco-light transition-colors">
            Energia
          </Link>
          <Link to="/lixo" className="text-white hover:text-eco-light transition-colors">
            Lixo
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-95 py-4">
          <div className="container mx-auto flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-white hover:text-eco-light px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/agua" 
              className="text-white hover:text-eco-light px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Água
            </Link>
            <Link 
              to="/energia" 
              className="text-white hover:text-eco-light px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Energia
            </Link>
            <Link 
              to="/lixo" 
              className="text-white hover:text-eco-light px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lixo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
