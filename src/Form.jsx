import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
          fnameValue: "", 
          lnameValue: "", 
          emailValue: "", 
          selVal: "Select gender", 
          adresValue: "", 
          bioValue: "" 
        };
     
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
      //console.log(event.target.value);
      this.setState({adresValue: event.target.value});
    }

    handleBioChange = (event) => {
      //console.log(event.target.value);
      this.setState({bioValue: event.target.value});
    }

    handleSubmit = (event) => {
      console.log(this.state);
      event.preventDefault();
    };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <label className="d-flex">
            <div >First name</div>
            <input 
              type="text" 
              name="fnameValue" 
              id="fname" 
              value={this.state.fname} 
              onChange={this.handleFnameChange}
            />
          </label>

          <label className="d-flex">
            <div>Last name</div>
            <input 
              type="text" 
              name="lname" 
              id="lname" 
              value={this.state.lname} 
              onChange={this.handleLnameChange}
            />
          </label>

          <label className="d-flex">
            <div>Email</div>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={this.state.email} 
              onChange={this.handleEmailChange}
            />
          </label>

          <label className="d-flex">
            <div>Gender</div>
            <select value={this.state.selVal} onChange={this.handleSelect}>
              <option value="Gender">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

           <label className="d-flex">
            <div>Address</div>
            <textarea 
              name="adresValue" 
              id="adresname"
              rows= "3" 
              value= {this.state.adresValue} 
              onChange= {this.handleAdresChange} 
            />
          </label>

          <label className="d-flex">
            <div>Bio</div>
            <textarea 
              name="name" 
              id="bioname"
              rows="3" 
              value= {this.state.bioValue} 
              onChange= {this.handleBioChange} 
            />
          </label>
        
          <div>
            <button type="submit" className="btn" >Submit</button>
          </div>
        </form>

        <div className="card">
          <div className="d-flex">
            <div className="title">Full name: </div>
            <div className="user-input"> { this.state.fnameValue} {this.state.lnameValue} </div>
          </div>
          
          <div className="d-flex">
            <div className="title">Email</div>
            <div className="user-input"> {this.state.emailValue} </div>
          </div>
          <div className="d-flex">
            <div className="title">Gender</div>
            <div className="user-input"> {this.state.selVal} </div>
          </div>
          <div className="d-flex">
            <div className="title">Address</div>
            <div className="user-input"> { this.state.adresValue }</div>
          </div>
          <div className="d-flex">
            <div className="title">Bio</div>
            <div className="user-input">{this.state.bioValue}</div>
          </div>
        </div>
        
      </>
    );
  }
}

export default Form;
