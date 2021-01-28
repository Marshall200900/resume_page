import React, { Component } from "react";
import './skills.css';

class Skills extends Component {
  render() {
    return (
        <div id="skills" className="skills">
          <div className="content">
            <h2>Мои навыки</h2>
            <h3>Frontend</h3>
            <table>
              <tr>
                <th></th>
                <th>Начальный уровень</th>
                <th>Продвинутый уровень</th>
                <th>Высокий уровень</th>
                <th>Профессионал</th>
              </tr>
              <tr>
                <td>HTML</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
              </tr>
              <tr>
                <td>Javascript</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
              </tr>
              <tr>
                <td>React.js</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td></td>
              </tr>
              
            </table>
            <h3>Backend</h3>
            <table>
              <tr>
                <th></th>
                <th>Начальный уровень</th>
                <th>Продвинутый уровень</th>
                <th>Высокий уровень</th>
                <th>Профессионал</th>
              </tr>
              <tr>
                <td>.NET</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td></td>
              </tr>
              <tr>
                <td>WinForms</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td>&bull;</td>
                <td></td>
              </tr>
             
            </table>
            <h3 className="regular-skills-header">Общие навыки</h3>
            <ul className="regular-skills">
              <li>Составление документации</li>
              <li>Тестирование программ</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      )
  }
}

export default Skills;
