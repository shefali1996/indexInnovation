import React, { Component } from "react";
import { I18n } from "react-redux-i18n";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import ContactForm from "..//ContactForm/ContactForm";

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

  render() {
    const { show, handleCloseModal } = this.props;
    return (
      <>
        <Modal
          size={"lg"}
          show={show}
          className="modal-wrapper contactus-pricing"
        >
          <Modal.Header>
            <Modal.Title onClick={handleCloseModal}>
              Close
              <i class="fa fa-times" aria-hidden="true"></i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
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
