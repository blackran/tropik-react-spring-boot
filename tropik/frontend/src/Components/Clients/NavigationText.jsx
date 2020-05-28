import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class NavigationText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 1
    }
  }
  animate = () => {
    this.setState({show: 0.7})
    setTimeout(() => {
      this.setState({show: 1})
    }, 400);
  }
  render() {
    return (
    <a href={this.props.url}>
      <p
        className="animatNavFloatLeft"
        onMouseUp={this.animate.bind(this)}
        style={{
          opacity: this.state.show,
          color: this.state.show===1?"white":"#3b6e2c"
        }}
        >
          {this.props.icon}
      </p>
     </a>
    );
  }
}

export default NavigationText;
