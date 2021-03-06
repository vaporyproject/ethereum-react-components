import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'loaders.css'
import './LoadingAnimations.css'

export default class Pulse extends Component {
  static displayName = 'Pulse'

  static propTypes = {
    pstyle: PropTypes.any,
    multiple: PropTypes.bool,
    fill: PropTypes.bool,
    color: PropTypes.string
  }

  static defaultProps = {
    multiple: false,
    fill: false,
    color: '#CCC'
  }

  render() {
    const { pstyle, multiple, fill, color } = this.props

    let type = multiple === true ? 'multiple' : 'one'
    type += fill === true ? '-filled' : ''

    const config = {
      one: {
        class: 'ball-scale-ripple',
        divs: 1,
        style: {
          borderColor: color
        }
      },
      'one-filled': {
        class: 'ball-scale',
        divs: 1,
        style: {
          backgroundColor: color
        }
      },
      multiple: {
        class: 'ball-scale-ripple-multiple',
        divs: 3,
        style: {
          borderColor: color
        }
      },
      'multiple-filled': {
        class: 'ball-scale-multiple',
        divs: 3,
        style: {
          backgroundColor: color
        }
      }
    }

    type = config[type]

    return (
      <div
        className="loader"
        style={{
          ...pstyle,
          width: '65px',
          height: '65px'
        }}>
        <div className={type.class}>
          {[...Array(type.divs)].map((_, idx) => (
            <div key={idx} style={type.style} />
          ))}
        </div>
      </div>
    )
  }
}
