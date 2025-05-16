
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';

interface CategoryCardProps {
  title: string;
  path: string;
  icon?: ReactNode;
  description?: string;
}

const CategoryCard = ({ title, path, icon, description }: CategoryCardProps) => {
  // Different themes based on the category title
  const getThemeClasses = () => {
    switch (title.toLowerCase()) {
      case "água":
        return "from-[#1e5daa] to-[#3498db] border-[#81c3f5] hover:from-[#1a4d8f] hover:to-[#2980b9]";
      case "energia":
        return "from-[#f39c12] to-[#d35400] border-[#f5c681] hover:from-[#e67e22] hover:to-[#a04000]";
      case "lixo":
        return "from-[#3b8a1e] to-[#56d456] border-[#81f581] hover:from-[#4aa82a] hover:to-[#66e466]";
      default:
        return "from-[#0d472a] to-[#103620] border-[#2a5d40] hover:from-[#155d37] hover:to-[#1a4c2d]";
    }
  };

  return (
    <Link to={path} className="block h-full">
      <Card className={`h-full bg-gradient-to-br ${getThemeClasses()} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center p-6 hover:scale-105`}>
        {icon && <div className="text-white mb-4 transform transition-transform group-hover:scale-110">{icon}</div>}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && <p className="text-gray-100 text-center text-sm">{description}</p>}
        <div className="mt-4 w-12 h-1 bg-white rounded-full opacity-70"></div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
