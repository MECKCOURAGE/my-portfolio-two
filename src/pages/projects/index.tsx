import ProjectBlock from "./components/projects-block";
import supabase from "../../supabase-client";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "../../components/skeleton-loader";

async function fetchProjects() {
  const { data, error } = await supabase.from("Projects").select("*");
  if (error) throw new Error(error.message);
  return data;
}

const Projects = () => {
  const {
    data: project,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["project"],
    queryFn: fetchProjects,
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
      <div className="md:hidden block sticky  top-0 py-4 bg-cover bg-center before:absolute before:inset-0  backdrop-blur-md  text-center z-50">
        PROJECTS
      </div>
      {project?.map((p) => (
        <ProjectBlock
          key={p.id}
          image={p.image}
          name={p.name}
          description={p.description}
          mainLink={p.mainLink}
          githubLink={p.githublink}
          skills={p.skills}
        />
      ))}
    </div>
  );
};

export default Projects;
