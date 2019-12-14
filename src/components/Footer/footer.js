import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import logoImage from '../../assets/images/footer/logo.png'
import ModalForm from '../ModalForm/ModalForm'
import './footer.scss'
import {connect} from 'react-redux'
import {Link} from "react-router"
import {OverlayTrigger,Tooltip} from "react-bootstrap"
import QrCode from "../../assets/images/customer_logos/qrcode.jpg"
class Footer extends Component {
  state = {
    show:false
  }
  handleClick = () => {
    this.setState(prevState => ({
      mobileHeader: !prevState.mobileHeader
    }));
  };

  handelShowModal=()=>{    
    this.setState(prevState => ({
      show: true
    }))
  }
  socialMediaIcon=()=>{
return <div className="icons">
<Link to="/blog" >{I18n.t('footer.blog')}</Link>
            <div className="row footer-social">
              <ul align="left">
                <li><a  href="https://www.facebook.com/idexinnovation" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a  href="https://www.linkedin.com/company/idex-innovation" rel="noopener noreferrer"  target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://twitter.com/idex_ideas" rel="noopener noreferrer"  target="_blank"><i className="fab fa-twitter" ></i></a></li>
      <li>
        <OverlayTrigger
          key={'top'}
          placement={'top'}
          overlay={
            <Tooltip id={`tooltip-top`}>
              <img src={QrCode} width="150px" height="150px" />
        </Tooltip>
          }
        >
          <a rel="noopener noreferrer" target="_blank"><i className="fab fa-weixin" ></i></a>
        </OverlayTrigger>

      </li>
                  
              </ul>
            </div>
</div>
  }
  render() {
    return (
      <div className="footer-wrapper">
        <ModalForm show={this.state.show}
          handleCloseModal={() => {
            this.setState({
              show: false
            })
          }}
      />
        <div className="footer-content row">
          <div className="footer-address col-md-3 offset-md-1">
            <p>{I18n.t('footer.idex')}</p>
            <p>info@idexltd.com</p>
            <p>{I18n.t('footer.address1')}</p>
            <p>{I18n.t('footer.address2')}</p>
            {this.socialMediaIcon()}
          </div>
          <div className="footer-logo col-md-2 offset-md-1">
            <img src={logoImage} alt=" " />
            <p>IDEX</p>
            {this.socialMediaIcon()}
          </div>
          <div className="footer-fn col-md-3 offset-md-1">
            <p>{I18n.t('footer.turnIdea')}</p>
            <div className="footer-collect">{I18n.t('footer.startCollecting')}</div>
            <div className="footer-start-btn" onClick={this.handelShowModal}>{I18n.t('footer.getStarted')}</div>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; 2019 - IDEX | All rights reserved
        </div>
      </div>
    )
  }
}



function mapStateToProps(state){
  return {
    i18n : state.i18n
  }
}
export default connect(mapStateToProps)(Footer);