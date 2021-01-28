import React, { Component } from "react";

import vk from '../../res/vk.png';
import inst from '../../res/inst.png';

import './contacts.css';

class Contacts extends Component {
  render() {
    return (
      <section id="contacts" className="contacts">
        <div className="content">
          <div className="contacts-wrapper">
            <h2>Напишите мне на почту</h2>
            <p className="email">arseniy.sidorov2013@gmail.com</p>
            <p className="other">Или в другие соцсети</p>
            <div className="links">
              <a href="https://www.instagram.com/smoon_light/"><img src={inst} alt="no inst photo"/></a>
              <a href="https://vk.com/gotfrozen"><img src={vk} alt="no vk photo"/></a>
            </div>
            <a className="toheader" href="#header">Наверх &#9650;</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Contacts;
