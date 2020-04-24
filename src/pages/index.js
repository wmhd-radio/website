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
            <h3>It’s Alive: A Halloween Radio Play</h3>
              <p>Aired Oct. 31, 2018
              After several months of research and working out the bugs WMHD is finally able to host live radio shows. One of these first live shows named “It’s Alive!” a live request show where listeners can email in their favorite Halloween songs. Friends and family are all asked to listen and participate firstly to give the host songs to play and secondly to notify the host if any of the previous issues appear with the first broadcast.</p><p> 
              Things start off smoothly as listeners email in requests however things begin to fall off track as the program glitches. At first, it appears to only be an awkward pause between songs but soon it becomes apparent there is more to these technical difficulties than just dead air. 
              </p><p>
              This play was written by Katana Colledge. The host was played by Katana Colledge. The Equipment Director was played by Graham Hepworth.</p>
              <audio src="assets/audio/halo_play.mp3" controls>
              Your browser does not support the audio element.
              </audio>
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
            <p>Luckily for you, WMHD offers our equpiment for rental! If you have an event coming up and are in need of anything music related, we're here.</p>
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
            <p>This show was aired (date) and was originally created by (creator).</p>
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
