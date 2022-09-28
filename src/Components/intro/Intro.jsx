import './Intro.scss';
import Typewriter from 'typewriter-effect';
import photo from '../../assets/photo.png';
import down from '../../assets/down.png';

export default function Intro() {

 
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={photo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Enas Awad</h1>
          <h3>
            Freelancer
            <Typewriter
              className=""
              options={{
                strings: [
                  'Full Stack Web Developer',
                  'UI/UX Designer',
                  'MERN Stack',
                ],
                autoStart: true,
                backDelay: 1500,
                backSpeed: 60,
                loop: true,
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}
