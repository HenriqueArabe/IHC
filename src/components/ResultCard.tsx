
interface ResultCardProps {
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  className?: string;
}

const ResultCard = ({ title, value, unit = '', description, className = '' }: ResultCardProps) => {
  return (
    <div className={`p-4 text-center rounded-lg border border-white/30 backdrop-blur-sm bg-white/10 ${className}`}>
      <h4 className="font-medium mb-2">{title}</h4>
      <div className="text-2xl font-bold text-white flex items-center justify-center space-x-1">
        <span>{value}</span>
        {unit && <span className="text-lg opacity-80">{unit}</span>}
      </div>
      {description && <p className="text-sm mt-2 opacity-80">{description}</p>}
    </div>
  );
};

export default ResultCard;
