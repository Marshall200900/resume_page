import React, { Component } from "react";
import './about_myself.css';
import hse from '../../res/hse.jpg';

class AboutMyself extends Component {
  render() {
    return (
      <section id="about-myself" className="about-myself">
        <div className="content">
          <h2>Обо мне</h2>
          <div className="wrapper">
            <div className="text">
            <p>На данный момент я обучаюсь в университете Высшая Школа Экономики на направлении <em>Программная инженерия</em>. Будучи на третьем курсе, знаком со многими аспектами разработки программного продукта,
              начиная от составления требований и заканчивая тестированием.
            </p>
            <p>
              Имеется опыт разработки во многих фреймворках, но самый большой упор идет на <b><em>веб-разработку</em></b>.
            </p>
            </div>
            <div className="photo">
              <img src={hse} alt="no hse photo here(sorry)"/>
              <p className="photo-description">Университет Высшая Школа Экономики</p>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default AboutMyself;
