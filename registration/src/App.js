import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      display: 'flex',
      height: '100%',
      width: '100%',
    }

    return(
      <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: 'black' }}>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default App;
