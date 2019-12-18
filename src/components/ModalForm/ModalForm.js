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

class ModalForm extends Component {
  state = {
    selectedCountry: "EN",
    name: "",
    email: "",
    password: "",
    phone: "",
    isError: false,
    email_error: false
  };
  handleSelectCountry = e => {
    this.setState({
      selectedCountry: e
    });
  };
  handleSubmitClick = e => {
    const { name, email, password, phone } = this.state;
    var re = /\S+@\S+\.\S+/;
    let email_verify = re.test(email);
    if (!email_verify) {
      this.setState({
        email_error: true
      });
    }
    if (name && email_verify && password && phone) {
      this.setState({
        email_error: false
      });
      this.props.sendTryItDetail({ name, email, password, phone: phone });
    } else {
      this.setState({
        isError: true
      });
    }
    e.preventDefault();
  };
  handleChange = (e, value) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };
  dropDownContent = () => {
    const data = {};
    const { selectedCountry } = this.state;
    if (selectedCountry === "EN") {
      data.icon = EN;
      data.code = "+87";
    } else if (selectedCountry === "CN") {
      data.icon = CN;
      data.code = "+81";
    } else {
      data.icon = HK;
      data.code = "+77";
    }
    return data;
  };

  render() {
    const { show, handleCloseModal, tryIt } = this.props;
    const { name, email, password, phone, isError, email_error } = this.state;
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
                  {((isError && !email) ||
                    email_error) && 
                      <Form.Label className="error">
                        {I18n.t("contact.emply_email")}
                      </Form.Label>
                    }
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>{I18n.t("modalForm.company")}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="password"
                    onChange={this.handleChange}
                  />
                  {isError && !password && (
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
                          <img src={this.dropDownContent().icon} />
                          <span className="code">
                            {this.dropDownContent().code}
                          </span>
                        </span>
                      }
                      id="input-group-dropdown-1"
                      onSelect={this.handleSelectCountry}
                    >
                      <Dropdown.Item eventKey="EN" href="#">
                        <div name="en">
                          <img src={EN} />
                          <span>+87</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="CN" href="#">
                        <img src={CN} />
                        <span>+81</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="HK" href="#">
                        <img src={HK} />
                        <span>+77</span>
                      </Dropdown.Item>
                    </DropdownButton>

                    <FormControl
                      aria-describedby="basic-addon1"
                      name="phone"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                  {isError && !phone && (
                    <Form.Label className="error">
                      {I18n.t("contact.empty_all")}
                    </Form.Label>
                  )}
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
