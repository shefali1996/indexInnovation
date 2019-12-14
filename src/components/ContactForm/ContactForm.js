import React, { Component } from "react";
import { I18n } from "react-redux-i18n";
import { sendContactDetail } from "../../actions/contactUs";
import "./ContactForm.scss";
import { Spinner, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    company: "",
    isError: false
  };

  handleClick = () => {
    const { name, email, message, company } = this.state;
    if (name && email && message && company) {
    this.props.sendContactDetail({ name, email, message, company });
    }
    else {
      this.setState({
        isError: true
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
    this.setState({
      [name]: value
    });
  };
  render() {
    const { name, email, message, company, isError } = this.state;
    const { contactData } = this.props;
    return (
      <div className="contact-wrapper">
        {/* <div className="contact-wrapper-bg"></div> */}
        <h2>{I18n.t("contact.keepTouch")}</h2>
        <p>{I18n.t("contact.connect")}</p>
        <div className="contact-form-wrapper">
          {/* { contactData.isSuccess && <Alert variant={"success"}>Thanks.We will contact Soon</Alert>} */}
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
          </div>
          <div className="form-group">
            <label>{I18n.t("contact.workEmail")}</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
            {/* <label> {isError && !email && "*field required"}</label> */}
          </div>
          <div className="form-group">
            <label>{I18n.t("contact.message")}</label>
            <textarea
              className="form-control contact-textarea"
              name="message"
              onChange={this.handleChange}
              value={message}
            ></textarea>
            {/* <label> {isError && !message && "*field required"}</label> */}
          </div>
          <div className="form-group form-footer">
            <div className="submit-btn" onClick={this.handleClick}>
              {contactData.isLoading ? (
                <Spinner animation="border" />
              ) : (
                I18n.t("contact.submit")
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "mmmmmmmm999999999677777777777");

  return {
    contactData: state.contactUs.contactData
  };
};

const mapDispatchToProps = dispatch => ({
  sendContactDetail: data => dispatch(sendContactDetail(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
