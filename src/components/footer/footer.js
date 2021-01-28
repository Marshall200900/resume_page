import React, { Component } from "react";
import './footer.css';
import tg from '../../res/tg.png';
import vk from '../../res/vk.png';
import inst from '../../res/inst.png';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="footer">
        <div className="content">
          <div className="footer-text">
            <p>По поводу предложений работы писать на почту: <span>arseniy.sidorov2013@gmail.com</span></p>
            <div className="links">
              <a href="https://www.instagram.com/smoon_light/"><img src={inst} alt="no inst photo"/></a>
              <a href="https://vk.com/gotfrozen"><img src={vk} alt="no vk photo"/></a>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
