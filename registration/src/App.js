import React, { Component } from 'react';
import { View } from 'react';
import QrReader from 'react-qr-reader';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// <QrReader
//   delay={this.state.delay}
//   style={previewStyle}
//   onError={this.handleError}
//   onScan={this.handleScan}
//   />
// <p>{this.state.result}</p>

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      email: '',
      password: ''
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

  emailHandler = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  passwordHandler = (event) => {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  loginHandler = (event) => {
    console.log("Submit");
  }

  render(){
    return(
      <div style={styles.pageContainer}>
        <form style={styles.formContainer} onSubmit={this.formHandler}>
          <div style={styles.titleContainer}>
            <img
              style={styles.logoContainer}
              src={require("./hiss.svg")}
            />
            <p style={{ fontSize: '18px' }}>by TAMUhack</p>
          </div>
          <input
            type='text'
            placeholder='Email'
            value={this.state.email}
            onChange={this.emailHandler}
            style={styles.inputContainer}
          />
          <input
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.passwordHandler}
            style={styles.inputContainer}
          />
          <Button
            onClick={this.loginHandler}
            style={styles.submitContainer}
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}

const styles = {
    logoContainer : {
      display: 'flex',
      marginLeft: '-10px',
      height: '7vh'
    },
    pageContainer : {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center'
    },
    titleContainer: {
      marginTop: '23vh',
      marginBottom: '8vh'
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '80vw',
      paddingLeft: '10vw',
      paddingRight: '10vw',
      height: '100vh',
      border: '2px solid red',
    },
    inputContainer: {
      height: '7vh',
      paddingLeft: '4%',
      marginBottom: '7vh',
      fontSize: 20
    },
    submitContainer: {
      height: '10vh',
      border: '2px solid red',
      backgroundColor: '#FF7C93',
      color: 'white',
      fontSize: 20
    }
};

export default App;
