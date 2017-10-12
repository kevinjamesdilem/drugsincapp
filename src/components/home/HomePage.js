import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      
      <div className = "homePage container">
      <div className = "img">
      </div>
        <div className = "row">
          <div className = "jumbotron">
            <div className = "container">
              <div className = "col-md-8">
                <h1>Welcome to Drugs Inc.</h1>
                <p>The world's first App for acquiring or donating medicines.
              is more convinient and easier to use than before.</p>
              </div>

              <div className = "col-md-1 offset-md-1">
              </div>

              <div className = "col-md-3">
                <img src = {require('./drugsinc.png')} width="70%" height="200px"/>
              </div>
            </div>
          </div>
        </div>

        <div className = "container">
          <div className = "row">
            <div className = "col-md-4">
              <h2>About</h2>
              <p>This App is about helping people acquire medicine easier and notifies them
              when medicines are available to prevent the medicines from getting wasted.</p>
              <Link to='about' className='buton btn btn-default'>About »</Link> 
            </div>
        
            <div className = "col-md-4">
              <h2>Donate</h2>
              <p>We accept donations from sponsors.</p>
              <Link to='requests' className='buton btn btn-default'>Donate »</Link>
            </div>
        
            <div className = "col-md-4">
              <h2>Request</h2>
              <p>Request medicines you need now to acquire them as soon as possible.</p>
              <Link to='/request' className='buton btn btn-default'>Request »</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default HomePage;
