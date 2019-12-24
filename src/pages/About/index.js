import React, { PureComponent, Fragment } from 'react';
import { credits } from '../../data';
import './style.scss';

class About extends PureComponent {
  constructor() {
    super();

    this.state = { credits };
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <h1 tabIndex="-1">Sesli Kitap V1</h1>
          <p>Taner Özel.</p>
          
          <ul>
            {/* {
              this.state.credits.map((license) => {
                return <li key={license.label}>{license.label} <a tabIndex="-1" target="_blank" rel="noopener noreferrer" href={license.link} >{license.author}</a></li>
              })
            } */}
          </ul>
        </div>

      </Fragment>
    );
  }
}

export default About;
