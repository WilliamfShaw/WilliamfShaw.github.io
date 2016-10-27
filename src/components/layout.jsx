import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element,
};

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="main__content">
            {this.props.children}
          </div>
        </div>
        <div className="footer">
          <Link className="footer__link" to="/">About</Link>
          <Link className="footer__link" to="/portfolio">Portfolio</Link>
          <Link className="footer__link" to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
