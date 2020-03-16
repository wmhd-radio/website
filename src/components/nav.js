import { Link } from "gatsby"
import React from "react"

import Logo from "../images/WMHD-Logo.png"

class Nav extends React.Component {
  state = {}

  componentDidMount(){
      let activeClass = 'navbar fixonscroll solidnavbar navbar-inverse';
      let activeClassPadder = 'hidden';
      this.setState({ activeClass, activeClassPadder });
      if (this.props.home) {
        window.addEventListener('scroll', () => {
          let activeClass = 'navbar fixonscroll solidnavbar navbar-inverse';
          let activeClassPadder = 'hidden';
          if (window.pageYOffset > window.innerHeight) {
            activeClass = 'navbar fixonscroll navbar-fixed-top navbar-inverse';
            activeClassPadder = '';
          }
          this.setState({ activeClass, activeClassPadder });
       });
      }
  }

  render() {
    let activeClass = this.state.activeClass;
    let activeClassPadder = this.state.activeClassPadder;

    return (
      <>
        { /* Navbar Begin */ }
        <nav className={activeClass} role="navigation" id="home-nav">
          <div className="container">
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li className="visible-xs-block">
                  <Link to="/" className="brand"><img src={Logo} height="60px" alt="WMHD Logo" /></Link>
                </li>
                <li class="dropdown">
                <a href="/about" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">History</a></li>
                    <li><a href="#">Current</a></li>
                  </ul>
                </li>
                <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="/Services">Services <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">DJ</a></li>
                    <li><a href="#">Equipment</a></li>
                    <li><a href="#">Guitar</a></li>
                    <li><a href="#">Podcasting</a></li>
                    <li><a href="#">Production</a></li>
                    <li><a href="#">Recording Studio</a></li>
                  </ul>
                </li>
                <li className="hidden-xs">
                  <Link to="/" className="brand"><img src={Logo} alt="WMHD Logo" /></Link>
                </li>
                <li class="dropdown">
                  <a href="/archive" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Archive <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">New Music Monday</a></li>
                    <li><a href="#">Podcasts</a></li>
                    <li><a href="#">Alumni</a></li>
                  </ul>
                </li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform">Rental/DJ Requests</a></li>
              </ul>{ /* /.nav */ }
            </div>{ /*/.nav-collapse */ }
          </div>{ /*/.container */ }
        </nav>{ /*/.navbar */ }
        { /* Navbar End */ }
        <div className={activeClassPadder} style={{height: 110}}></div>
      </>
    )
  }

}

export default Nav
