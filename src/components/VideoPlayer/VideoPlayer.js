import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import {connect} from 'react-redux'
import './VideoPlayer.scss'

import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  render () {
    return <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          // height='auto'
        />
      </div>
  }
}

function mapStateToProps(state){
  return {
    i18n : state.i18n
  }
}
export default connect(mapStateToProps)(VideoPlayer);