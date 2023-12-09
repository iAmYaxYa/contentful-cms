import useFetch from "../useFetch";
import Project from "./Project";

const Projects = () => {
  const { loading, projects } = useFetch();

  if (loading) {
    return (
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>Loading...</h4>
      </section>
    );
  }
  return (
    <div className="projects">
      <div className="title">
        <h4>Projects</h4>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects?.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
