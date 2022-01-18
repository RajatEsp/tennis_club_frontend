import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header1 from '../document/header1'
import { Textbox,Textarea,Radiobox,Checkbox,Select} from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
// import "./styles.css";

import { COUNTRY_OPTIONS_LIST, JOB_OPTIONS_LIST } from "./consts";

export default class demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone : "",
      email: "",
      password : "",
      password2 : "",
      number: "",
      description: "",
      job: "",
      country: "",
      agreement: false,
      isAgreementChecked: false,
      hasNameError: true,
      hasEmailError : true,
    
      hasMovieError: true,
      hasJobError: true,
      hasAgreementError: true,
      validate: false
    };
    this.validateForm = this.validateForm.bind(this);
  }

  toggleValidating(validate) {
    this.setState({ validate });
  }

  validateForm(e) {
    e.preventDefault();
    this.toggleValidating(true);
    const {
      // name,
      // job,
      // country,
      // agreement,
      // description,
      hasNameError,
      hasEmailError,
      hasPhoneError,
      hasMovieError,
      hasJobError,
      hasAgreementError
    } = this.state;
    if (
      !hasNameError &&
      !hasPhoneError &&
      !hasEmailError &&
      !hasJobError &&
      !hasAgreementError
    ) {
      alert("All validated!");
    }
  }

  render() {
    const {
      name,
      phone,
      email,
      description,
      password,
      password2,
      validate
    } = this.state;
    const rowStyle = {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "2%",
      fontSize: "14px"
    };
    const rowWrapperStyle = {
      display: "table",
      width: "100%"
    };
    const rowContainerStyle = {
      display: "table-cell",
      verticalAlign: "middle",
      borderBottom: "1px solid #e5e5e5"
    };
    const labelStyle = {
      display: "inline-block"
    };
    const labelContentStyle = {
      verticalAlign: "middle"
    };

    // let countryItem;
    // COUNTRY_OPTIONS_LIST.filter(i => {
    //   if (String(i.id) == String(country)) {
    //     countryItem = i;
    //   }
    // });

    return (
     <>
     <Header1/>
      <div

        style={{
          minHeight: "1000px",
          padding: "10px",
          border: "1px solid #e5e5e5"
        }}
      >
        <h1>Example form</h1>
        <form onSubmit={this.validateForm}>

          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Name</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
      <Textbox  attributesWrapper={{}} attributesInput={{id: "Name",name: "Name",type: "text",placeholder: "Place your name here ^-^"
                    }}
                    value={name} 
                    disabled={false} 
                    validate={validate} 
                    validationCallback={res =>
                      this.setState({ hasNameError: res, validate: false })
                    }
                    classNameInput="" 
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onChange={(name, e) => {
                      this.setState({ name });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} 
                    validationOption={{
                      name: "Name", 
                      check: true, 
                      required: true 
          
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-insert-drive-file"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Phone</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
                  <Textarea
                    attributesWrapper={{}}
                    attributesInput={{
                      id: "phone",
                      name: "phone",
                      placeholder: "Place your phone here ^-^"
                    
                    }}
                    value={description} // Optional.[String].Default: "".
                    disabled={false} // Optional.[Bool].Default: false.
                   
                    placeholder="Place your description here ^-^" // Optional.[String].Default: "".
                    validate={validate} 
                    validationCallback={res =>
                      this.setState({
                        hasDescriptionError: res,
                        validate: false
                      })
                    } 
                    classNameInput="" // Optional.[String].Default: "".
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onChange={(phone, e) => {
                      this.setState({ phone });
                      console.log(e);
                    }} 
                    onBlur={e => {
                      console.log(e);
                    }} 
                    validationOption={{
                      name: "Phone", 
                      check: true, 
                      required: true, 
                      type: "string" 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Email</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
      <Textbox  attributesWrapper={{}} attributesInput={{id: "Email",name: "Email",type: "text",placeholder: "Email Required "
                    }}
                    value={email} 
                    disabled={false} 
                    validate={validate} 
                    validationCallback={res =>
                      this.setState({ hasEmailError: res, validate: false })
                    }
                    classNameInput="" 
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onChange={(email, e) => {
                      this.setState({ email });
                      console.log(e);
                    }} 
                    onBlur={e => {
                      console.log(e);
                    }} 
                    validationOption={{
                      name: "Email", 
                      check: true, 
                      required: true 
          
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Password</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
      <Textbox  attributesWrapper={{}} attributesInput={{id: "Password",name: "Password",type: "text",placeholder: "Password Required ^-^"
                    }}
                    value={password} 
                    disabled={false} 
                    validate={validate} 
                    validationCallback={res =>
                      this.setState({ hasPasswordError: res, validate: false })
                    }
                    classNameInput="" 
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onChange={(password, e) => {
                      this.setState({ password });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} 
                    validationOption={{
                      name: "Password", 
                      check: true, 
                      required: true 
          
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: "3 3 0px", marginTop: "3px" }}
                >
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: "20px" }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Confirm Password</span>
                </div>
                <div style={{ flex: "6 6 0px" }}>
      <Textbox  attributesWrapper={{}} attributesInput={{id: "password2",name: "password2",type: "text",placeholder: "Confirm Password Required ^-^"
                    }}
                    value={password2} 
                    disabled={false} 
                    validate={validate} 
                    validationCallback={res =>
                      this.setState({ hasPasswordError: res, validate: false })
                    }
                    classNameInput="" 
                    classNameWrapper="" // Optional.[String].Default: "".
                    classNameContainer="" // Optional.[String].Default: "".
                    customStyleInput={{}} // Optional.[Object].Default: {}.
                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                    customStyleContainer={{}} // Optional.[Object].Default: {}.
                    onChange={(password2, e) => {
                      this.setState({ password2 });
                      console.log(e);
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={e => {
                      console.log(e);
                    }} 
                    validationOption={{
                      name: "password2", 
                      check: true, 
                      required: true 
                     }}
                  />
                </div>
              </div>
            </div>
          </div>

         

          <div style={{ height: "10px" }} />
          <div
            className={`my-button my-button__red save-button`}
            onClick={this.validateForm}
          >
            validate!
          </div>
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>

</>
    );
  }
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
