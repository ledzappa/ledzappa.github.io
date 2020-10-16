import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import nabo1 from './../../../assets/img/nabo1.png';
import nabo2 from './../../../assets/img/nabo2.png';
import nabo3 from './../../../assets/img/nabo3.png';

class Projects extends React.Component {
  projects = [
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

  projectsProfessional = [
    {
      name: 'SEB - Login Client',
      description:
        'The login application of swedish bank SEB, powered by Angular/Typescript. Refactored the entire application from one single module into multiple feature modules to enable lazy loading. Implemented NGRX-state management, QR-functionality among others.',
    },
    {
      name: 'SEB - General Signing Surface',
      description:
        'A micro service app used by the entire bank in order to sign payments, documents etc. Powered by angular. Written by me from scratch.',
    },
  ];
  render() {
    return (
      <div className="page page-projects">
        <Carousel className="vh-100" interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100" src={nabo1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <br />
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={nabo2} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={nabo3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <br />
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Projects;
