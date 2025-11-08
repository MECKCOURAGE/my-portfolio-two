import ExperienceBlock from "./components/experience";
import supabase from "../../supabase-client";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "../../components/skeleton-loader";

async function fetchExperience() {
  const { data, error } = await supabase.from("Experience").select("*");
  if (error) throw new Error(error.message);
  return data;
}

const Experience = () => {
  const {
    data: experience,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["experience"],
    queryFn: fetchExperience,
  });

  if (isLoading) return <SkeletonCard />;
  if (error)
    return (
      <div className="flex items-left ml-4 text-gray-400 text-lg">
        An Error Occurred
      </div>
    );
  return (
    <div className="space-y-5 ">
      <div className="md:hidden block sticky aboslute top-0 py-4 bg-cover bg-center before:absolute before:inset-0  backdrop-blur-md  text-center z-50">
        EXPERIENCE
      </div>
      {experience?.map((e) => (
        <ExperienceBlock
          key={e.id}
          startDate={e.startDate}
          isPresent={e.ispresent}
          endDate={e.endDate}
          company={e.company}
          role={e.role}
          description={e.description}
          links={e.links}
          skills={e.skills}
        />
      ))}
    </div>
  );
};

export default Experience;
