interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
  return (
    <div className="gradient-card p-6 rounded-xl text-center shadow-elegant hover:shadow-hover transition-all duration-300 group">
      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;