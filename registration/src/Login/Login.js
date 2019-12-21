import React, { Component } from 'react';
import { View } from 'react';
import QrReader from 'react-qr-reader';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
      email: '',
      password: '',
      submitClr: '#FF7C93'
    };
    //this.handleScan = this.handleScan.bind(this);
  }

  login() {
    this.props.login();
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
  };

  render() {
    return(
      <div style={styles.pageContainer}>
        <form style={styles.formContainer} onSubmit={this.formHandler}>
          <div style={styles.titleContainer}>
            <img
              style={styles.logoContainer}
              src={require("../assets/hiss.svg")}
            />
            <p style={{ fontSize: '18px' }}>by tamuhack</p>
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
            onClick={() => this.login()}
            style={{...styles.submitContainer, backgroundColor: this.state.submitClr}}
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
      height: '56px'
    },
    pageContainer : {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      alignItems: 'center',
    },
    titleContainer: {
      marginTop: '27vh',
      marginBottom: '40px',
      width: '80vw'
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      paddingLeft: '10vw',
      paddingRight: '10vw',
      height: '100vh',
    },
    inputContainer: {
      height: '57px',
      width: '80vw',
      paddingLeft: '4%',
      marginBottom: '3vh',
      fontSize: 17
    },
    submitContainer: {
      height: '57px',
      width: '80vw',
      marginTop: '3vh',
      color: 'white',
      fontSize: 20
    },
    stripe: {
      position: 'absolute',
      width: '70vw',
      bottom: -1000
    }
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  userData: state.auth.userData,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actions.login())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
