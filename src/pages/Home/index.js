import React, { Component, Fragment } from 'react';
import MediaButton from '../../components/MediaButton';
import { ReactComponent as Headphones } from '../../icons/headphones.svg';
import { ReactComponent as PlayButton } from '../../icons/play-arrow.svg';
import { ReactComponent as Github } from '../../icons/github.svg';
import './style.scss';

class Home extends Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      [...document.querySelector('.home').querySelectorAll('.hidden')].map((elmt) => elmt.classList.add('active'));
    });
  }

  shouldComponentUpdate(prevProps) {
    return prevProps.active !== this.props.active;
  }

  render() {
    return (
      <Fragment>
        <h1 className="title hidden">Sesli Kitap</h1>
        <p className="subtitle hidden">1300 sesli kitap </p>
        <Headphones className="icon hidden" width="100" fill="#ccc" />

        <MediaButton
          className="hidden"
          tabEnabled={this.props.active}
          name="button show playlist"
          active={true}
          onClick={this.props.onStartClick}
          icon={<PlayButton width={24} />}
        />
        <footer className="footer">
          <a href="https://github.com/tanerozel" aria-label="Github repository" tabIndex={this.props.active ? "0" : "-1"} target="_blank" rel="noopener noreferrer" className="github project"> <Github fill="#b9b9b9" /></a>
         
        </footer>
      </Fragment>
    );
  }
}

export default Home;
