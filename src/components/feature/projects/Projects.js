import React from 'react';
import ContentBox from '../../shared/content-box/ContentBox';

class Projects extends React.Component {
  projects = [
    {
      name: 'Scng',
      description: 'A word generator!',
      link: 'https://ledzappa.github.io/scng',
      img: 'assets/scng.png'
    },
    {
      name: 'Countries and Capitals game',
      description:
        'A game I developed in order to teach myself the countries and capitals of the world. Vanilla JS, bootstrap, animate.css.',
      link: 'https://ledzappa.github.io/countries-and-capitals-game',
      img: 'assets/scng.png'
    },
    {
      name: 'Baeck.studio',
      description:
        'A website for swedish graphical studio "Bäck". Built in Angular, with bootstrap and animate.css.',
      link: 'https://bäck.studio/',
      img: 'assets/scng.png'
    },
    {
      name: 'Juntti.nu',
      description:
        'My personal website, powered by react, bootstrap and animate.css.',
      link: 'https://ledzappa.github.io/juntti.nu',
      img: 'assets/scng.png'
    },
    {
      name: 'Seiken X',
      description:
        'A Snes style game developed using the game maker engine and the GML-language. Work in progress.',
      link: 'https://ledzappa.github.io/scng',
      img: 'assets/scng.png'
    }
  ];

  projectsProfessional = [
    {
      name: 'SEB - Login Client',
      description:
        'The login application of swedish bank SEB, powered by Angular/Typescript. Refactored the entire application from one single module into multiple feature modules to enable lazy loading. Implemented NGRX-state management, QR-functionality among others.'
    },
    {
      name: 'SEB - General Signing Surface',
      description:
        'A micro service app used by the entire bank in order to sign payments, documents etc. Powered by angular. Written by me from scratch.'
    }
  ];
  render() {
    return (
      <ContentBox>
        <h2>Projects</h2>
        <div className="content-bg-dark">
          {this.projects.map(item => (
            <div className="row pb-3">
              <div className="col-12">
                <h4>{item.name}</h4>
              </div>
              <div className="col-sm-4 text-left">Image</div>
              <div className="col-sm-8 text-left">{item.description}</div>
            </div>
          ))}
        </div>
      </ContentBox>
    );
  }
}

export default Projects;
