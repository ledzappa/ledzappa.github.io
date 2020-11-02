import React from 'react';
import './TechStack.css';

const shuffle = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

class TechStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', () => this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateWindowDimensions());
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const words = [
      { text: 'JavaScript', value: 100 },
      { text: 'TypeScript', value: 80 },
      { text: 'Angular', value: 70 },
      { text: 'RxJS', value: 30 },
      { text: 'NGRX', value: 30 },
      { text: 'Redux', value: 30 },
      { text: 'Karma', value: 30 },
      { text: 'Jest', value: 50 },
      { text: 'Jasmine', value: 30 },
      { text: 'Protractor', value: 30 },
      { text: 'Angular.js', value: 60 },
      { text: 'React.js', value: 60 },
      { text: 'React Native', value: 35 },
      { text: 'PHP', value: 50 },
      { text: 'Java', value: 40 },
      { text: 'Node.js', value: 40 },
      { text: 'OpenShift', value: 30 },
      { text: 'Jenkins', value: 30 },
      { text: 'Docker', value: 30 },
      { text: 'Github', value: 50 },
      { text: 'Kibana', value: 50 },
      { text: 'VsCode', value: 30 },
      { text: 'IntelliJ', value: 30 },
      { text: 'Photoshop', value: 50 },
      { text: 'Linux', value: 40 },
      { text: 'Bash', value: 40 },
      { text: 'UX', value: 65 },
      { text: 'CSS', value: 70 },
      { text: 'HTML', value: 70 },
      { text: 'SQL', value: 60 },
      { text: 'Chrome Devtools', value: 60 },
      { text: 'Bootstrap', value: 70 },
      { text: 'Scrum', value: 35 },
      { text: 'Kanban', value: 35 },
      { text: 'Jira', value: 35 },
    ];

    return (
      <div className="page page-tech-stack">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mt-4 mt-sm-0">&lt; TECH-STACK /&gt;</h1>
              <hr />
              <div className="text-center mb-4">
                {shuffle(words).map((word, i) => (
                  <div
                    className="d-inline-block mr-3"
                    style={{
                      fontSize:
                        word.value *
                        (this.state.width > 1000
                          ? 1
                          : this.state.width > 600
                          ? 0.6
                          : 0.4),
                      opacity: i % 2 === 1 ? 0.6 : 1,
                    }}
                    key={i}
                  >
                    {word.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
