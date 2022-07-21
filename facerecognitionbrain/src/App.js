// eslint-disable-next-line
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from "react-tsparticles";
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import { loadFull } from "tsparticles";



const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};
const particlesLoaded = (container) => {
  console.log(container);
};

function App() {
  return (
    <div className="App">
      <Particles
      className='tsParticles'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            // value: "black",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 45,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "edge",
          },
          size: {
            value: { min: 4, max: 6},
          },
        },
        detectRetina: true,
      }}
    />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

    </div>
  );
}

export default App;
