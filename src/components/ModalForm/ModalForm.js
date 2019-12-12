import React, { Component } from "react";
import { I18n, setLocale } from "react-redux-i18n";
import "./ModalForm.scss";
import { connect } from "react-redux";
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl
} from "react-bootstrap";
import EN from "../../assets/images/lang/en.svg";
import CN from "../../assets/images/lang/cn.svg";
import HK from "../../assets/images/lang/hk.svg";

class ModalForm extends Component {
  state = {
    selectedCountry: "EN"
  };
  handleSelectCountry = e => {
    this.setState({
      selectedCountry: e
    });
  };
  handleSubmitClick = e => {
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
    return data
  };
  render() {
    const { show, handleCloseModal } = this.props;
    return (
      <>
        <Modal size={"lg"} show={show} className="modal-wrapper">
          <Modal.Header>
            <Modal.Title>
              Close
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={handleCloseModal}
              ></i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmitClick}>
              <div className="content">
                <h2>Try IDEX for free</h2>
                <div>
                  To try IDEX Innovation Management Software for free,enter your
                  details below.
                </div>
                <div>
                  We will be in touch shortly with login details .Rest assure
                  your data is secure with us.
                </div>
              </div>
              <div className="form-content">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="fullName"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    name="email"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="password"
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Phone Number <span className="optional">(optional)</span>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title={
                        <span>
                          <img src={this.dropDownContent().icon} />
                          <span className="code">{this.dropDownContent().code}</span>
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
                      name="phoneNumber"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </Form.Group>
                <div className="button-container">
                  <Button variant="primary" type="submit">
                    Submit
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
    i18n: state.i18n
  };
}
export default connect(mapStateToProps)(ModalForm);
