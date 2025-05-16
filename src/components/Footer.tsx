
import { Link } from 'react-router-dom';
import { Droplet, Zap, Trash2, Home, Info, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#071209] text-white py-10 mt-auto border-t border-[#1f3d27] border-opacity-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/921/921490.png" alt="Earth" className="w-10 h-10 mr-3" />
              <h3 className="font-bold text-xl text-[#a8c083]">SustentabilidadeTransparente</h3>
            </div>
            <p className="text-sm text-gray-300 mt-1">
              Conscientização através da transparência.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 mb-6 md:mb-0">
            <Link to="/" className="text-gray-300 hover:text-[#a8c083] transition-colors flex items-center gap-2">
              <Home size={16} /> Início
            </Link>
            <Link to="/agua" className="text-gray-300 hover:text-[#a8c083] transition-colors flex items-center gap-2">
              <Droplet size={16} /> Água
            </Link>
            <Link to="/energia" className="text-gray-300 hover:text-[#a8c083] transition-colors flex items-center gap-2">
              <Zap size={16} /> Energia
            </Link>
            <Link to="/lixo" className="text-gray-300 hover:text-[#a8c083] transition-colors flex items-center gap-2">
              <Trash2 size={16} /> Lixo
            </Link>
            <a href="/#sobre" className="text-gray-300 hover:text-[#a8c083] transition-colors flex items-center gap-2">
              <Info size={16} /> Sobre
            </a>
            <a href="/#contato" className="text-gray-300 hover:text-[#a8c083] transition-colors flex items-center gap-2">
              <Mail size={16} /> Contato
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © SustentabilidadeTransparente {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
