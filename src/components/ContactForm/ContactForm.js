import React, { Component } from "react";
import { I18n } from "react-redux-i18n";
import { sendContactDetail } from "../../actions/contactUs";
import "./ContactForm.scss";
import { Spinner, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";
import { log } from "util";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    company: "",
    isError: false,
    email_error: false
  };

  handleClick = () => {
    const { name, email, message, company } = this.state;
    var re = /\S+@\S+\.\S+/;
    let email_verify = re.test(email);
    if (!email_verify) {
      this.setState({
        email_error: true
      });
    }
    const { subject } = this.props;
    if (name && email_verify && message && company) {
      this.props.sendContactDetail({ name, email, message, company, subject });
      this.setState({
        email_error: false
      });
    } else {
      this.setState({
        isError: true
      },()=>{
        this.props.sendDataToChild(this.state.isError)
      });
    }
  };
  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps, this.props) && this.props.contactData.isSuccess) {
      this.setState({
        name: "",
        email: "",
        message: "",
        company: "",
        isError: false
      });
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    if(e.currentTarget.name==="email"){
      var re = /\S+@\S+\.\S+/;
      let email_verify = re.test(e.currentTarget.value);
      if(email_verify){
        this.setState({
          email_error:false
        })
      }
    }
    this.setState({
      [name]:  value.replace(/  +/g, ' ')
    });
  };
  render() {
    const { name, email, message, company, isError, email_error } = this.state;
    const { contactData, subject } = this.props;
    return (
      <div className="contact-wrapper">
        <h2>{I18n.t("contact.keepTouch")}</h2>
        <p>{I18n.t("contact.connect")}</p>
        <div className="contact-form-wrapper">
          {/* {contactData.isSuccess && (
            <Alert variant={"success"}>
              {I18n.t("contact.message_sent_successfull")}
            </Alert>
          )} */}
          <div className="form-group">
            <label>{I18n.t("contact.name")}</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
            {/* <label> {isError && !name && "*field required"}</label> */}
            {isError && !name && (
              <label className="error"> {I18n.t("contact.empty_all")}</label>
            )}
          </div>
          <div className="form-group">
            <label>{I18n.t("contact.company")}</label>
            <input
              type="text"
              className="form-control"
              name="company"
              onChange={this.handleChange}
              value={company}
            />
            {/* <label> {isError && !company && "*field required"}</label> */}
            {isError && !company && (
              <label className="error"> {I18n.t("contact.empty_all")} </label>
            )}
          </div>
          <div className="form-group">
            <label>{I18n.t("contact.workEmail")}</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.handleChange}
              value={email}
              required
            />
            {((isError && !email) || email_error) && (
              <label className="error"> {I18n.t("contact.emply_email")}</label>
            )}
          </div>
          <div className="form-group">
            <label>{I18n.t("contact.message")}</label>
            <textarea
              className="form-control contact-textarea"
              name="message"
              onChange={this.handleChange}
              value={message}
            ></textarea>
            {isError && !message && (
              <label className="error"> {I18n.t("contact.empty_all")}</label>
            )}
          </div>
          <div className="form-group form-footer">
            <div className="submit-btn" onClick={this.handleClick}>
              {I18n.t("contact.submit")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contactData: state.contactUs.contactData,
    i18n: state.i18n
  };
};

const mapDispatchToProps = dispatch => ({
  sendContactDetail: data => dispatch(sendContactDetail(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
