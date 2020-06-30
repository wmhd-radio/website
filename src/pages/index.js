import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import SEO from "../components/seo"
import Nav from "../components/nav"

import Banner from "../images/banner2.jpg"  
import "../components/index.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="banner" id="banner">
      <div id="banner-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active" style={{backgroundImage: `url(${Banner})`, backgroundSize: 'cover'}}>
           <div className="overlay"></div>
            <div className="container">
              <div className="content-wrap">
                <div className="content">
                  <div className="textwrap">
                    <div className="subtitle animated fadeIn wow" data-wow-delay=".5s">
                      <h2>Where Music Has Dimension</h2>
                    </div>
                    <div className="title animated fadeIn wow" data-wow-delay="1s">
                      <h1>WMHD Radio <span className="light">The Monkey</span></h1>
                    </div>
                    <div className="subtitle animated fadeIn wow" data-wow-delay="1.5s">
                      <h2>Rose-Hulman Institute of Technology</h2>
                    </div>
                  </div>{ /*/.textwrap */ }
                </div>{ /*/.content */ }
              </div>{ /*/.content-wrap */ }
            </div>{ /*/.container */ }
          </div>{ /*/.item */ }
        </div>{ /*/.carousel-inner */ }
        { /* Controls */ }
        <div className="scroll-info">
          <a onClick={() => scrollTo('#home-nav')}>
            <div className="shape">
              <i className="fa fa-angle-down"></i>
            </div>
          </a>
        </div>{ /*/.scroll-info */ }
      </div>{ /*/.banner-carousel */ }
    </section>{ /* /.banner */ }
    { /* Banner End */ }

    <Nav home={true}/>

    { /* Highlight Begin */ }
    <section className="highlight" id="highlight">
      <div className="container">
        <div className="overlay">
          <h2>Check This Out</h2>
          <div className="text">
            <h3>Live DJ Set by Keith CR</h3>
              <p>Aired June. 06, 2020 <br></br> <br></br> PLAYING TRACKS BY: <br></br>
              Maddix, Anvy, Coldplay, Danny Olson, Henry Hartley, Sandro Silva X Saberz, W&W & Hardwell & Lil Jon and more.</p>
              <p>Every other Friday night we have our continuing, now hour long, live show with Keith! You can listen to some awesome music and interact with Keith as he DJ's via our discord live chat. </p>
              <button class="def-button2"> <a href="https://www.mixcloud.com/wmhdonlineradio/keith-c-r-dj-set-2-by-keith-cr/"> Listen Here! </a> </button>
          </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* highlight */ }
    { /* Highlight End */ }

    { /* Schedule Begin */ }
    {/*<section className="schedule" id="schedule">
      <div className="overlay"></div>
      <div className="container content">
        <div className="col-md-12 title wow animated fadeIn" data-wow-delay="0.3s">
          <h2>Show Schedule</h2>
          <div className="text">
            <p>All times are in EST.</p>
          </div>
        </div>
      </div>
    </section>*/}
    { /* Schedule End */ }

    { /* Rentals Begin */ }
    <section className="rentals" id="rentals">
      <div className="container">
        <div className="overlay">
          <h2>Do You Need Some Equipment For An Event?</h2>
          <div className="text">
            <button class="def-button2"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSeggZD4Busmn-YDP0NbEWqNMB_leOIePlblqkMUsb9WULST9g/viewform"> Rental Form </a> </button>
         </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* rentals */ }
    { /* Rentals End */ }

    { /* Highlight Begin */ }
    <section className="highlight" id="highlight">
      <div className="container">
        <div className="overlay">
          <h2>Check This Out</h2>
          <div className="text">
          <h3>Talkin' Bout Rose</h3>
              <p>Aired May. 06, 2020 </p>
              <p>Description Needed: </p>
            <button class="def-button2"> <a href="https://www.mixcloud.com/wmhdonlineradio/"> Listen Here! </a> </button>
         </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* highlight */ }
    { /* Highlight End */ }

    { /* About Begin */ }
    <section className="highlight" id="highlight">
      <div className="container">
        <div className="overlay">
          <h2>About WMHD</h2>
          <div className="text">
            <p>WMHD is an online college radio station hosted by students of Rose-Hulman Institute of Technology.</p>
            <button class="def-button2"> <a href="about"> About Us </a> </button>
         </div>
        </div>
      </div>{ /* /.container */ }
    </section>{ /* about */ }
    { /* About End */ }

    { /* calendarbegin */ }
    <section className="calendar" id="calendar">
          <div className="overlay"></div>
          <div className="container content">
            <div className="col-md-12 title wow animated fadeIn" data-wow-delay="0.5s"><h2>Calendar</h2></div>
            <iframe src="https://calendar.google.com/calendar/embed?src=wmhdradio%40gmail.com&amp;ctz=America/New_York&amp;mode=AGENDA&amp;color=%23D50000" title="calendar" style={{border: 0}} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
          </div> { /*/.container*/ }
    </section>{ /*/.calendar*/ }
    { /* calendar end */ }
  </>
)

export default IndexPage
