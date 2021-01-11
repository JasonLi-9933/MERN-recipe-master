import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions'
import Button from './utils/Button';

class GoogleAuth extends React.Component {
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    componentDidMount() {
        window
            .gapi
            .load('client:auth2', () => {
                window
                    .gapi
                    .client
                    .init({clientId: "491133618326-f6ko9t59hht5rksti62ibcvhvr42rrvt.apps.googleusercontent.com", scope: 'email'})
                    .then(() => {
                        this.auth = window
                            .gapi
                            .auth2
                            .getAuthInstance(); 
                        this
                            .auth
                            .isSignedIn
                            .listen(this.onAuthChange);
                        this.onAuthChange(this.auth.isSignedIn.get());
                    })
            })
    }

    render() {
        console.log(this.auth);
        const buttonConfig = this.props.isSignedIn
            ? {
                color: "bg-red-400",
                text: "Sign Out",
                clickHandler: () => {
                    this.auth.signOut()
                }
            }
            : {
                color: "bg-blue-400",
                text: "Sign In",
                clickHandler: () => {
                    this.auth.signIn()
                }
            };
        return (<Button
            color={buttonConfig.color}
            text={buttonConfig.text}
            clickHandler={buttonConfig.clickHandler}/>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {isSignedIn: state.auth.isSignedIn}
}

const mapDispatchToProps = {
    signIn,
    signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);

