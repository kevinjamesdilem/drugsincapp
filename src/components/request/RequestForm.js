import React from 'react';
import TextInput from './../commons/TextInput';
import SelectInput from './../commons/SelectInput';
import TextArea from './../commons/TextArea';


const RequestForm = ({ request, allBloods, onChange, onSave, loading, staticLists, errors }) => {
  return (
    <form className="container">

      <h2>Medicine Request Form</h2>

      <TextInput
        name="title"
        label="First Name"
        value={request.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="title"
        label="Last Name"
        value={request.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="location"
        label="Health Center Location"
        rows={6}
        value={request.location}
        onChange={onChange}
        error={errors.location}
      />

      <TextArea
        name="description"
        label="Letter of Request"
        rows={6}
        value={request.description}
        onChange={onChange}
        error={errors.description}
      />

      <input type="submit" className="btn btn-primary" value="Post Request" onClick={onSave}/>
    </form>
  )
}

export default RequestForm;
