import React from 'react';

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
      description: 'My personal website, powered by react, bootstrap and animate.css.',
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
  render() {
    return (
      <div className="col-lg-8 col-md-10 col-sm-12">
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
      </div>
    );
  }
}

export default Projects;
