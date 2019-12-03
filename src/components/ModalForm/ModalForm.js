
import React, { Component } from 'react'
import { I18n , setLocale} from 'react-redux-i18n'
import './ModalForm.scss'
import {connect} from 'react-redux'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap'

class ModalForm extends Component {
  state = {
    show:false
  }
  
  render() {
   

    return (
      <>
        <Button variant="primary">
          Launch demo modal
        </Button>

        <Modal show={true}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" >
              Close
            </Button>
            <Button variant="primary" >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


function mapStateToProps(state){
  return {
    i18n : state.i18n
  }
}
export default connect(mapStateToProps)(ModalForm);