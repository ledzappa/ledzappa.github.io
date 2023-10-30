import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TechStack.css';

const shuffleArray = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

const TechStack = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [words, setWords] = useState([]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowDimensions();
    window.addEventListener('resize', () => updateWindowDimensions());

    axios.get(`mocks/words.json`).then((res) => {
      setWords(shuffleArray(res.data.words));
    });

    return () =>
      window.removeEventListener('resize', () => updateWindowDimensions());
  }, []);

  return (
    <div className="page page-tech-stack">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-4">&lt; TECH-STACK /&gt;</h1>
            <hr />
            <div className="text-center mb-4">
              {words.map((word, i) => (
                <div
                  className="d-inline-block mr-3"
                  style={{
                    fontSize:
                      word.value *
                      (size.width > 1320 ? 1 : size.width > 600 ? 0.6 : 0.4),
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
};

export default TechStack;
