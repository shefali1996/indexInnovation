import React, { Component } from "react";
import "./ModalForm.scss";
import { connect } from "react-redux";
import {
  Modal,
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl
} from "react-bootstrap";
import EN from "../../assets/images/lang/en.svg";
import CN from "../../assets/images/lang/cn.svg";
import HK from "../../assets/images/lang/hk.svg";
import { sendTryItDetail } from "../../actions/tryItFree";
import { I18n } from "react-redux-i18n";
import { Spinner, Alert } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import country from "./country";
  // import  flag from "./flags"

class ModalForm extends Component {
  state = {
    selectedCountry:   {
      "iso2": "GB",
      "name": "United Kingdom",
      "iso3": "GBR",
      "unicode": "🇬🇧",
      "dial": "+44",
      "currency": "GBP",
      "capital": "London",
      "continent": "EU",
      "traditional_cn": "英國",
      "simplified_cn": "英国"
    },
    name: "",
    email: "",
    company: "",
    phone: "",
    isError: false,
    email_error: false
  };
  handleSelectCountry = e => {
    let selectedCountryObject = country.find(curr => {
      return curr.dial === e;
    });
    this.setState({
      selectedCountry: selectedCountryObject
    });
  };
  handleSubmitClick = e => {
    const { name, email, company, phone } = this.state;
    var re = /\S+@\S+\.\S+/;
    let email_verify = re.test(email);
    if (!email_verify) {
      this.setState({
        email_error: true
      });
    }
    let phoneCountry=this.state.selectedCountry.dial + phone
    if (name && email_verify && company) {
      this.setState({
        email_error: false
      });
      this.props.sendTryItDetail({ name, email, company, phone: phoneCountry });
    } else {
      this.setState({
        isError: true
      });
    }
    e.preventDefault();
  };
  handleChange = (e, value) => {
    if (e.currentTarget.name === "email") {
      var re = /\S+@\S+\.\S+/;
      let email_verify = re.test(e.currentTarget.value);
      if (email_verify) {
        this.setState({
          email_error: false
        });
      }
    }
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  // dropDownContent = () => {
  //   const data = {};
  //   const { selectedCountry } = this.state;
  //   if (selectedCountry === "EN") {
  //     data.icon = EN;
  //     data.code = "+44";
  //   } else if (selectedCountry === "CN") {
  //     data.icon = CN;
  //     data.code = "+86";
  //   } else {
  //     data.icon = HK;
  //     data.code = "+852";
  //   }
  //   return data;
  // };
  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show && !this.props.show) {
      this.setState({
        selectedCountry: "EN",
        name: "",
        email: "",
        company: "",
        phone: "",
        isError: false,
        email_error: false
      });
    }
  }
  render() {
    const {locale}=this.props.i18n
    const { show, handleCloseModal, tryIt } = this.props;
    const { name, email, company, phone, isError, email_error } = this.state;
    return (
      <>
        <Modal size={"lg"} show={show} className="modal-wrapper try-free-modal">
          <Modal.Header>
            <Modal.Title onClick={handleCloseModal}>
              <span>{I18n.t("modalForm.close")}</span>
              <i class="fa fa-times" aria-hidden="true"></i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmitClick}>
              <div className="content">
                <h2>{I18n.t("modalForm.try_free")}</h2>
                <div>{I18n.t("modalForm.para1")}</div>
                <div>{I18n.t("modalForm.para2")}</div>
                {/* {tryIt.isSuccess && (
                  <Alert variant={"success"}>
                    {I18n.t("contact.message_sent_successfull")}
                  </Alert>
                )} */}
              </div>
              <div className="form-content">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>{I18n.t("modalForm.fullName")}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="name"
                    onChange={this.handleChange}
                  />
                  {isError && !name && (
                    <Form.Label className="error">
                      {I18n.t("contact.empty_all")}
                    </Form.Label>
                  )}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>{I18n.t("modalForm.emailAddress")}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="email"
                    onChange={this.handleChange}
                  />

                  {((isError && !email) || email_error) && (
                    <Form.Label className="error">
                      {I18n.t("contact.emply_email")}
                    </Form.Label>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>{I18n.t("modalForm.company")}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="company"
                    onChange={this.handleChange}
                  />
                  {isError && !company && (
                    <Form.Label className="error">
                      {I18n.t("contact.empty_all")}
                    </Form.Label>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    {I18n.t("modalForm.phoneNumber")}{" "}
                    <span className="optional">
                      ({I18n.t("modalForm.optional")})
                    </span>
                  </Form.Label>

                  <InputGroup className="mb-3">
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title={
                        <span>
                          <span className="code">

                            { this.state.selectedCountry.iso2 &&  React.createElement('img', { src: require('./flags/' + this.state.selectedCountry.iso2.toLowerCase() + '.svg'),className:"country-flag" })}

                            {this.state.selectedCountry.dial}
                          </span>
                        </span>
                      }
                      id="input-group-dropdown-1"
                      onSelect={this.handleSelectCountry}
                    >
                      {country.map(val => {
                        return (
                          <Dropdown.Item eventKey={val.dial} href="#">
                            <span name="en"> 
                            { React.createElement('img', { src: require('./flags/' + val.iso2.toLowerCase() + '.svg'),className:"country-flag" })}
                            <span>{locale==="GB"?val.name:locale==="CN"?val.simplified_cn:val.traditional_cn}</span> <span>{val.dial}</span>
                            </span>
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton>

                    <FormControl
                      aria-describedby="basic-addon1"
                      name="phone"
                      onChange={this.handleChange}
                      type="number"
                    />
                  </InputGroup>
                </Form.Group>
                <div className="button-container">
                  <Button variant="primary" type="submit">
                    {I18n.t("modalForm.submit")}
                  </Button>
                </div>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n,
    tryIt: state.tryItFree.tryItData
  };
}
const mapDispatchToProps = dispatch => ({
  sendTryItDetail: data => dispatch(sendTryItDetail(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalForm);
