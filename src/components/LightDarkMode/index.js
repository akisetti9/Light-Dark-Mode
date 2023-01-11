// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightOn: false,
    boxClass: 'blackBox',
    buttonText: 'Light Mode',
    buttonClass: 'whiteButton',
  }

  rendAuthButton = () => {
    const {isLightOn} = this.state
    let lightSwitch
    if (isLightOn === false) {
      this.setState(() => ({
        isLightOn: true,
        boxClass: 'whiteBox',
        buttonText: 'Dark Mode',
        buttonClass: 'blackButton',
      }))
    } else {
      this.setState(() => ({
        isLightOn: false,
        boxClass: 'blackBox',
        buttonText: 'Light Mode',
        buttonClass: 'whiteButton',
      }))
    }
    return lightSwitch
  }

  render() {
    const {boxClass, buttonText, buttonClass} = this.state
    return (
      <div className="container">
        <div className={`${boxClass} box`}>
          <h1>Click To Change Mode</h1>
          <button
            type="button"
            className={`${buttonClass} btn`}
            onClick={this.rendAuthButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
