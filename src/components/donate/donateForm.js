import React from 'react';
import { Link } from 'react-router';
import TextInput from './../commons/TextInput';
import SelectInput from './../commons/SelectInput';
import TextArea from './../commons/TextArea';


class donateForm extends React.Component {
  
  render() {
    return (
      <div className='donateForm'>
        <div className = "container">
        <h1>Donate Now!</h1>
          <div className = "row">
            <div className = "col-md-4">
              <TextInput
                name="title"
                label="First Name"
              /> 
            </div>
        
            <div className = "col-md-4">
              <TextInput
                name="title"
                label="Last Name"
              />
            </div>

            <div className = "col-md-4">
              <TextInput
                name="title"
                label="Contact Number"
              />
            </div>
          </div>

          <div className = "row">
            <div className = "col-md-6">
              <TextInput
                name="title"
                label="Address"
              /> 
            </div>
        
            <div className = "col-md-6">
              <TextInput
                name="title"
                label="Email Address"
              /> 
            </div>
          </div>

          <div className = "row">
            <div className = "col-md-12">
              <TextArea
                name="description"
                label="Details of Donation"
                rows={10}
              />
            </div>
          </div>

          <input type="submit" className="btn btn-primary" value="Send" />
        </div>
      </div>
    )
  }

}



export default donateForm;
