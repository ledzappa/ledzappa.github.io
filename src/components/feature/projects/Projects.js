import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState({
    projects: { professional: [], personal: [] },
  });

  useEffect(() => {
    axios.get(`mocks/projects.json`).then((res) => {
      console.log(res.data);
      setProjects(res.data.projects);
    });
  }, []);

  return (
    <div className="page page-projects">
      <div className="header">
        <h2>Projects</h2>
      </div>
      <Carousel interval={3000}>
        {projects.professional?.map((project, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={require('./../../../assets/img/' + project.image)}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{project.title}</h3>
              <br />
              <p>{project.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
