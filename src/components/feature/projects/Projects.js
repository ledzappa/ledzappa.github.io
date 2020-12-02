import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import nabo1 from './../../../assets/img/nabo1.png';
import nabo2 from './../../../assets/img/nabo2.png';
import nabo3 from './../../../assets/img/nabo3.png';
import seb1 from './../../../assets/img/seb1.png';

const projects = [
  {
    name: 'Scng',
    description: 'A word generator!',
    link: 'https://ledzappa.github.io/scng',
    img: 'assets/scng.png',
  },
  {
    name: 'Countries and Capitals game',
    description:
      'A game I developed in order to teach myself the countries and capitals of the world. Vanilla JS, bootstrap, animate.css.',
    link: 'https://ledzappa.github.io/countries-and-capitals-game',
    img: 'assets/scng.png',
  },
  {
    name: 'Baeck.studio',
    description:
      'A website for swedish graphical studio "Bäck". Built in Angular, with bootstrap and animate.css.',
    link: 'https://bäck.studio/',
    img: 'assets/scng.png',
  },
  {
    name: 'Juntti.nu',
    description:
      'My personal website, powered by react, bootstrap and animate.css.',
    link: 'https://ledzappa.github.io/juntti.nu',
    img: 'assets/scng.png',
  },
  {
    name: 'Seiken X',
    description:
      'A Snes style game developed using the game maker engine and the GML-language. Work in progress.',
    link: 'https://ledzappa.github.io/scng',
    img: 'assets/scng.png',
  },
];

const projectsProfessional = [
  { name: 'Conzignus/NABO', description: 'Web portal', image: nabo1 },
  { name: 'Conzignus/NABO', description: 'Web portal', image: nabo2 },
  { name: 'Conzignus/NABO', description: 'Admin interface', image: nabo3 },
  {
    name: 'SEB - Login Client',
    description:
      'The login application of swedish bank SEB, powered by Angular. Highly configurable. Refactored the entire application from one single module into multiple feature modules to enable lazy loading. Implemented NGRX-state management, QR-functionality among others.',
    image: seb1,
  },
  {
    name: 'SEB - General Signing Surface',
    description:
      'A micro service app used by the entire bank in order to sign payments, documents etc. Powered by angular. Written by me from scratch.',
    image: nabo1,
  },
];

const Projects = () => (
  <div className="page page-projects">
    <div className="header">
      <h2>Projects</h2>
    </div>
    <Carousel interval={3000}>
      {projectsProfessional.map((project, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={project.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{project.name}</h3>
            <br />
            <p>{project.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default Projects;
