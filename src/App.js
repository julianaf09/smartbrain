import { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParticlesBg className='particles' color='#E1D9D1' num={100} type='cobweb' bg={true} />
        <Navigation />
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
