import React from 'react';

class Projects extends React.Component {
  projects = [
    {
      name: 'Scng',
      description: 'A word generator',
      link: 'https://ledzappa.github.io/scng',
      img: 'assets/scng.png'
    },
    {
      name: 'Juntti.nu',
      description: 'A website built with React',
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
