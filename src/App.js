import React, { useEffect } from 'react';
import { Animated } from "react-animated-css";
import Piano from "./components/Piano";
import Credits from "./components/Credits";
import MobileError from "./components/MobileError";
import { isMobileBrowser } from "./utils/utils";
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown);
    return () => document.body.removeEventListener('keydown', onKeyDown);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      e.preventDefault();
    }
  };  

  return (
    <div className="App">
      {
        !isMobileBrowser() ?
          <React.Fragment>
            <BackgroundParticles />

            <Animated animationIn="fadeIn" animationInDuration={1500} animationInDelay={300}>
              <h1 className="brand">Virtual Piano</h1>
            </Animated>
            <Animated animationIn="fadeInUp" animationInDuration={1500} animationInDelay={1000}>
              <Piano />
            </Animated>
            <Animated animationIn="fadeIn" animationInDuration={1500} animationInDelay={1500}>
              <Credits />
            </Animated>
          </React.Fragment>
        :
          <MobileError />
      }
    </div>
  );
}

export default App;
