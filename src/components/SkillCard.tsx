interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const SkillCard = ({ icon, name, level }: SkillCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Advanced':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="gradient-card p-6 rounded-xl text-center shadow-elegant hover:shadow-hover transition-all duration-300 group">
      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">
        {name}
      </h3>
      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(level)}`}>
        {level}
      </span>
    </div>
  );
};

export default SkillCard;