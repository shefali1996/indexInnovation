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
class ModalForm extends Component {
  state = {
    selectedCountry: "EN",
    name: "",
    email: "",
    password: "",
    phone: "",
    isError: false
  };
  handleSelectCountry = e => {
    this.setState({
      selectedCountry: e
    });
  };
  handleSubmitClick = e => {
    const { name, email, password, phone } = this.state;
    if (name && email && password && phone) {
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
    console.log(this.state, "uuuuuuuuuuuuuu");

    const { show, handleCloseModal } = this.props;
    const { name, email, password, phone ,isError} = this.state;

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
                    name="name"
                    onChange={this.handleChange}
                  />
                  <Form.Label>{isError && !name && "* field is required"}</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    name="email"
                    onChange={this.handleChange}
                  />
                  <Form.Label>{isError && !email && "* field is required"}</Form.Label>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="password"
                    onChange={this.handleChange}
                  />
                  <Form.Label>{isError && !password && "* field is required"}</Form.Label>
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
                  <Form.Label>{isError && !phone && "* field is required"}</Form.Label>
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
const mapDispatchToProps = dispatch => ({
  sendTryItDetail: data => dispatch(sendTryItDetail(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalForm);
