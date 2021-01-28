import React, { Component } from "react";
import './header.css';

class Header extends Component {
  render() {
    
    return( 
      <div id="header" className="header">
        <div className="content">
          <ul>
            <li><a href="#about-myself">Обо мне</a></li>
            <li><a href="#skills">Навыки</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
