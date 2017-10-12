import React from 'react';
import { Link } from 'react-router'

class AboutPage extends React.Component {
  
  render() {
    return (
      <div className = "homePage container">
        <div className = "jumbotron">
          <div className = "container">
            <h1>About Drugs Inc.</h1>
            <p>We created an App that helps the constituents
             of each district acquire medicines at health centers
             and informs them when a certain medicine is available.</p>

             <h2>Who does the problem affect?</h2>
             <p> The problem affects mostly are the elderly or the disabled
             constituents that have a hard time getting medicine required
             because, some people simply can't afford the medicine or they are 
             unable to get to their health centers because of certain ailments.</p>
             
             <h2>What are the bounaries of the problem?</h2>
             <p> This App also informs the constituents if there are any available
             medicines to prevent the medicines from getting wasted.</p>
             
             <h2>When does this issue occur?</h2>
             <p> This problem occurs almost everyday but mostly on rainy seasons
             where alot of people are getting sick and can't afford to buy medicines or
             they simply don't know that there are available medicines that are free at their health centers.</p>
             
             <h2>Where is the issue occuring?</h2>
             <p> This issue occurs most in the over populated communities in the country where they have shortage of
             medicines. </p>
             
             <h2>Why is it important that we fix the problem?</h2>
             <p> It is important that we come up with a solution to this issue because this will help prevent the medicines
             from getting wasted and help a lot of people in need.</p>
            <Link to='/' className='btn btn-lg btn-default'>Home »</Link>
          </div>
        </div>

        <div className = "container">
          <div className = "row">
            <div className = "col-md-6">
              <h1>Includes</h1>
              <p>Over the Counter Medicines</p>
              <p>Prescription Medicines</p>
              <p>Generic Medicines</p>
              <p>Vaccinations</p>
            </div>
        
            <div className = "col-md-6">
              <h1>Application Features</h1>
              <p>Notification for available medicine.</p>
              <p>Notification update upon arrival of medicines.</p>
              <p>Delivery system for those unable to avail medicines personally.</p>
              <p>Statistics for tracking epidemic.</p>
              <p>Notification for medical missions.</p>
              <p>Donations from certain sponsors</p>
            </div>
            </div>
          </div>
        </div>
    )
  }

}



export default AboutPage;
