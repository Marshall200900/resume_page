import React, { Component } from "react";
import './header.css';

class Header extends Component {
  render() {
    
    return( 
      <div className="header">
        <div className="content">
          <ul>
            <li><a href="#description">Главная</a></li>
            <li><a href="#skills_list">Услуги</a></li>
            <li><a href="#footer">Контакты</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
