import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma4' style={{position: 'absolute', top: '0', left: '0'}}>
      <Tilt className='br3 pa3' style={{height: '150px', width: '150px', background: '#19a974', margin: '0'}}>      
        <img style={{paddingTop: '5px'}} src={brain} alt='brainlogo'></img>
      </Tilt>
    </div>
  );
}
  
export default Logo;