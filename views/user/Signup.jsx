const React = require('react');
const Default = require('../layouts/DefaultLogin');

class Login extends React.Component{
    render(){
        return(
            <Default>
                <div className='signup'>
                    <form action="/user/signup" method="POST">
                        <fieldset className='signup-form'>
                            <div className="cont">
                                <div className="sign-in">
                                    <h2>Sign Up</h2>
                                    <input type="username" name='username' placeholder='username' required/>
                                    <input type="password" name='password' placeholder='password' required/>
                                </div>
                            </div>
                            <input type='submit' value='Create Account'/>
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Login;