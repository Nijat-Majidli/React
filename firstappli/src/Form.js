import React, { Component } from 'react'

class Form extends Component 
{
  // On crée un objet "initialState" :
  initialState = {name: '',  job: ''}

  // On crée un objet "state" et lui attibuions la valeur de l'objet initialState :
  state = this.initialState

  render() 
  {
    const { name, job } = this.state;
  
    return (
      <form>
        <h3>Add new member</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.inputChange} 
        />

        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.inputChange} 
        />

        <input type="button" value="Add" onClick={this.submitForm} />
      </form>
    );
  }

  
  // On crée une fonction fléchée inputChange:
  inputChange = (event) => {
    const { name, value } = event.target
  
    this.setState({[name]: value})
  }

  // On crée une fonction fléchée submitForm:
  submitForm = () => {
    this.props.addData(this.state)
    this.setState(this.initialState)
  }
}

export default Form;