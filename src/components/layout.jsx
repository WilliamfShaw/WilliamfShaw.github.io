import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element,
};

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="side-nav">
          <ul>
            <li>
              <Link to="/" className="about-link">About</Link>
            </li>
            <li>
              <Link to="/portfolio" className="about-link">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume" className="about-link">Resume</Link>
            </li>
            <li>
              <Link to="/contact" className="about-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="top-placeholder">
        </div>
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
