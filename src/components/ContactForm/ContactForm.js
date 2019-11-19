import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'

import './ContactForm.scss'

export default class ContactForm extends Component {
  state = {

  }

  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-wrapper-bg"></div>
        <h2>{I18n.t('contact.keepTouch')}</h2>
        <p>{I18n.t('contact.connect')}</p>
        <div className="contact-form-wrapper">
          <div className="form-group">
            <label>{I18n.t('contact.name')}</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>{I18n.t('contact.company')}</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>{I18n.t('contact.workEmail')}</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>{I18n.t('contact.message')}</label>
            <textarea className="form-control"></textarea>
          </div>
          <div className="form-group form-footer">
            <div className="submit-btn">{I18n.t('contact.submit')}</div>
          </div>
        </div>
      </div>
    )
  }
}
