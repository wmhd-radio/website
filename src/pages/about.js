import React from "react"

import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const AboutPage = ({data}) => (
  <>
    <SEO title="About" />
    <section className="container content" style={{marginBottom: 20}}>
      <h1>About WMHD Radio</h1>
      <Img fluid={data.clubImage.childImageSharp.fluid} className="clubimage" />

      <h2 id="about#current"> Currently: </h2>
      <p>WMHD Radio is a student run radio that offers online music, equipment rentals & DJ services for Rose-Hulman Institute of Technology community. Our studio is located in the basement of BSB hall, room 032.</p>
      <h3>Club Meetings</h3>
      <div class="alert alert-danger" role="alert"><b>Notice:</b> Due to the COVID-19 pandemic, all WMHD Radio events and open hours are canceled for the rest of academic year. The studio will be closed for this time period as well.</div>
      <p>WMHD Online Radio has general club meetings every Wednesday at 8 PM in the basement of BSB, room 032.
      In these meetings we discuss/listen to music, plan events, stream live radio shows, 
      and also run workshops on things like DJing, equipment setup, and the recording process.</p>

      <h3>Current Officers</h3>
      <div><b>General Manager</b>: Katana Colledge</div>
      <div><b>Equipment Manager</b>: Keith Condray-Raderstorf</div>
      <div><b>Personnel Director</b>: Laya Mehra</div>
      <div><b>Program Director</b>: Sabri Amer</div>
      <div><b>Communications Director</b>: Logan Ramon</div>
      <div><b>Webmaster</b>: Athena Henderson</div>
      <div><b>Treasurer</b>: Andrew Orians</div>
      <div><b>Faculty Advisor</b>: Kevin Lanke</div>
      
      <h3>Room Info</h3>
      <p>We have three main rooms in BSB basement: the Broadcasting Room (BSB032), Recording Studio (BSB030), and Podcasting Studio (BSB028).
      We also have a storage room for our hundreds of CDs and records and equipment. We have one of the largest spaces on campus for a club and we strive to make them available to campus.
      Come hang out in them! Every Rose-Hulman student is welcome to use the rooms. See <Link to="/services">Services</Link> for information about using the recording studio and the podcasting studio.
      The hours that the radio is open weekly are posted below.</p>
      
      <h3>Open Radio Room Hours and Weekly Events</h3>
      <div class="alert alert-danger" role="alert"><b>Notice:</b> Due to the COVID-19 pandemic, all WMHD Radio events and open hours are canceled for the rest of academic year. The studio will be closed for this time period as well.</div>
      <div><b>Monday:</b></div>
      <div>4:00 PM - 5:00 PM (Keith)</div>
      <div><b>Tuesday:</b></div>
      <div>1:30 PM - 5:00 PM (Athena)</div>
      <div><b>Wednesday:</b></div>
      <div>4:30 PM - 5:30 PM (Will)</div>
      <div>Officer Mettings at 5:00 PM</div> 
      <div>Club Meetings at 8:00 PM</div>
      <div><b>Thursday:</b></div>
      <div>3:00 PM - 5:00 PM (Laya)</div>
      <div><b>Friday:</b></div>
      <div>1:30 PM -5:00 PM (Athena)</div>
      <div>5:00 PM - 12:00 AM (Katana)</div>
      <div>Jam Session from 8:00 PM to 12:00 AM</div>
      <div><b>Saturday:</b></div>
      <div>Production Lessons from 2:00 PM to 3:30 PM</div> 
      <div>Guitar Lessons from 3:00 PM to 5:00 PM</div>
      <div>Jam Session from 5:00 PM to 12:00 AM</div>

      <h2 id="about#history">History: </h2>

    </section>
  </>
)

export const query = graphql`
  query {
    clubImage: file(relativePath: { eq: "club-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4028) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
