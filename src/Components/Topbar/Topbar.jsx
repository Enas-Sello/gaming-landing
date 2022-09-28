import './topbar.scss';
import {  SiLinkedin, SiGithub } from 'react-icons/si';
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Enas.
          </a>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/enas-sellow-36153219a/">
              <SiLinkedin className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/Enas-Sello">
              <SiGithub className="icon" />
            </a>
          </div>
          {/* <div className="itemContainer">
            <SiGmail className="icon" />
            <span>enas.awad169@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
