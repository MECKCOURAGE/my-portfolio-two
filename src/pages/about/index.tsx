import supabase from "../../supabase-client";
import { useQuery } from "@tanstack/react-query";
import TextHighlighter from "./components/bold-text";
import SkeletonCard from "../../components/skeleton-loader";

async function fetchAbout() {
  const { data, error } = await supabase.from("About").select("*");
  if (error) throw new Error(error.message);
  return data;
}
const About = () => {
  const {
    data: text,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAbout,
  });

  if (isLoading) return <SkeletonCard />;
  if (error)
    return (
      <div className="flex items-left ml-4 text-gray-400 text-lg">
        An Error Occurred
      </div>
    );
  return (
    <div className="flex flex-col text-customSlate space-y-5 text-[17px]">
      <div className="md:hidden block sticky aboslute top-0 py-4 bg-cover bg-center before:absolute before:inset-0  backdrop-blur-md  text-center z-50">
        ABOUT
      </div>
      {text?.map((p) => (
        <TextHighlighter key={p.id} text={p.about} />
      ))}
    </div>
  );
};

export default About;
