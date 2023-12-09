const Project = ({ project }) => {
  return (
    <a href={project?.url} className="project" target="_blank" rel="noreferer">
      <img src={project?.img} alt={project?.title} className="img" />
      <h5>{project?.title}</h5>
    </a>
  );
};

export default Project;
