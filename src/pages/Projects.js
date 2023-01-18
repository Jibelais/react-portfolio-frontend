import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    console.log(data)
    setProjects(data);
  };
console.log(projects)
  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getProjectsData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (

      <div className = "container">
        <div className= "project" key = {project._id}>
          <p>{project.name}</p>
          <img className = "thumbnail" src={project.image} alt = "project" />
          <a target="_blank" rel="noreferrer" href={project.git}>
            <button>Github</button>
          </a>
          <a target="_blank" rel="noreferrer" href={project.live}>
            <button>live site</button>
          </a>
        </div>
      </div>
      
    ));
  };

  // return projects ? loaded() : <h1>Loading...</h1>;

  return (
    <div className = "project-layout">
       {projects ? loaded() : <h1>Loading...</h1>}
    </div>
   
  )
}

export default Projects;