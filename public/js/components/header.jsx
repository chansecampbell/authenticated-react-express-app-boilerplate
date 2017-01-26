'use strict';
import React from 'react';
import { Link } from 'react-router';
 
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  componentWillUnmount() {
     this.setState({
      open: false
    });
  }

  toggleNav() {
    this.setState({
      open: !this.state.open
    });
  }
  
  render() {
    const toggle = ['header__links', this.state.open].join(' ');
    return (
      <div className="header">
        <h3 className="header__logo">React Express App</h3>
        <span className="header__burger" onClick={this.toggleNav.bind(this)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
        <ul className={toggle}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/map'>Map</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>
      </div>  
    );
  }
}

export default Header;
