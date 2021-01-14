import React, { Component } from 'react';
import avatar from '../../res/avatar.jpg';
import './description.css';
class Description extends Component {
  render() {
    return (
      <section id="description" className="description">
        <div className="content">
          <div className="foo"></div>
          <h1>Арсений Сидоров</h1>
          <div className="wrapper">
            <img className="avatar" src={avatar} alt="no photo :("/>
            <div className="column-text-link">
              <p>Здравствуйте! Меня зовут Арсений Сидоров и я веб-дизайнер и программист</p>
              <a href="#footer">Написать мне</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Description;
