import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';
import 'tachyons'; 
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30, 
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        {/* build component */}
        <Navigation/>
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*   
        
        <FaceRecognition /> */}
      
      </div>
    );
  }
}

export default App;
