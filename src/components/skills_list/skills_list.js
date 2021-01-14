import React, { Component } from "react";
import './skills_list.css';
import clock from '../../res/clock.png';
import check from '../../res/check.png';
import bricks from '../../res/bricks.png';
class SkillsList extends Component {
  render() {
    return (
      <section id="skills_list" className="skills-list">
        <div className="content">
          <div className="skills-wrapper">
            <div className="skill skills-fast">
              <img className="skills-image" src={clock} alt="no photo yet"/>
              <div className="skills-description">
                <h1>Быстро</h1>
                <div className="skills-text">Работа выполняется в заданные сроки</div>
              </div>
            </div>
            <div className="skill skills-quality">
            <img className="skills-image" src={check} alt="no photo yet"/>
              <div className="skills-description">
                <h1>Качественно</h1>
                <div className="skills-text">Работа будет сделана в лучшем виде</div>
              </div>
            </div>
            <div className="skill skills-stable">
            <img className="skills-image" src={bricks} alt="no photo yet"/>
              <div className="skills-description">
                <h1>Надежно</h1>
                <div className="skills-text">Не волнуйтесь, проект будет работать стабильно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default SkillsList;
