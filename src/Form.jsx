import React, { Component } from "react";

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = { fnameValue: "", selVal: "Male", adresValue: "" };
     // this.handleChange = this.handleChange.bind(this);
    }

    handleFnameChange = (event) =>{
      //console.log(this.state.fnameValue);
      this.setState({ fnameValue: event.target.value });
    }

    handleLnameChange = (event) => {
     // console.log(event.target.value);
      this.setState({lnameValue: event.target.value});
    }

    handleEmailChange = (event) => {
      this.setState({ emailValue: event.target.value})
    }

    handleSelect = (event) => {
      this.setState({selVal: event.target.value})
    }

    handleAdresChange = (event) => {
      console.log(event.target.value);
      this.setState({adresValue: event.target.value});
    }

    handleBioChange = (event) => {
      console.log(event.target.value);
      this.setState({bioValue: event.target.value});
    }

    handleSubmit = (event) => {
      console.log(this.state.fnameValue, this.state.lnameValue, this.state.emailValue, this.state.selVal, this.state.adresValue, this.state.bioValue);
      event.preventDefault();
    };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>First name</div>
            <input type="text" name="" id="fname" onChange={this.handleFnameChange}/>
          </label>

          <label>
            <div>Last name</div>
            <input type="text" name="" id="lname" onChange={this.handleLnameChange}/>
          </label>

          <label>
            <div>Email</div>
            <input type="email" name="name" id="email" onChange={this.handleEmailChange}/>
          </label>

          <label>
            <div>Gender</div>
            <select value={this.state.selVal} onChange={this.handleSelect}>
              <option value="Gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

           <label>
            <div>Address</div>
            <textarea name="adresValue" id="adresname" value= {this.state.adresValue} onChange= {this.handleAdresChange} />
          </label>

          <label>
            <div>Bio</div>
            <textarea name="name" id="bioname" value= {this.state.bioValue} onChange= {this.handleBioChange} />
          </label>
        
          <div>
            <button type="submit" >Submit</button>
          </div>
        </form>

        <p> First name: {this.state.fnameValue} </p>
        <p> Last name: {this.state.lnameValue} </p>
        <p> Email address: {this.state.emailValue} </p>
        <p> Gender: {this.state.selVal} </p>
        <p> Address: {this.state.adresValue} </p>
        <p> Bio: {this.state.bioValue} </p>
      </>
    );
  }
}

export default Form;
