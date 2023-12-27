import "./ProjectCard.css"; // Import the CSS file
const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <img src={data?.img} alt={data?.title} className="project-image" />
      <div className="overlay">
        <div className="project-text">{data?.title}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
