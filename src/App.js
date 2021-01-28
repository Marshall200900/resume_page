import Header from './components/header';
import Description from './components/description';
import AboutMyself from './components/about_myself';
import Skills from './components/skills';
import Footer from './components/footer';
import Contacts from './components/contacts';

import './App.css';

import parallax from './res/parallax.png';

let App = () => {
  return (
    <div>
      <div className="parallax" style={{backgroundImage: `url(${parallax})`}}></div>
      <Header/>
      <Description/>
      <AboutMyself/>
      <Skills/>
      <Contacts/>
    </div>
  )
}

export default App;