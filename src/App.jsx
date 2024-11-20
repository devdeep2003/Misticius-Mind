import React from 'react';
import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/700.css';
import './styles/popups/app.scss'
import { ArrowCircleRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="parent">
      <div className="header">
      <Link to = '/login'> <div className="login-button">Login</div> </Link>
        <div className="start-free-trial-button">
          Start Free Trial{" "}
          <div>
            <ArrowCircleRight size={28} className="arrow-right-circle" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
