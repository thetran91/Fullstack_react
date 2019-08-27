import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key='1'>
            <Payments />
          </li>,
          <li key='2' style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='3'>
            <a href='/api/logout'>Logout</a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            /* Goi action auth */
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
          >
            Emaily
          </Link>
          <ul className='right'>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// function mapStatetoProps(state) {
//   return {
//     /* auth la object tu reducers/index.js file tong combine ca reducers */
//     auth: state.auth
//   };
// }
function mapStatetoProps({ auth }) {
  return {
    /* auth la object tu reducers/index.js file tong combine ca reducers */
    auth
  };
}

export default connect(mapStatetoProps)(Header);
