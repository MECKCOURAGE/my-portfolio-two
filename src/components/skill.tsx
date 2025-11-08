const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className="text-teal bg-customTeal rounded-full text-center text-xs leading-5 px-3 py-1">
      {skill}
    </div>
  );
};
export default Skill;