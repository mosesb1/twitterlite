const React = require('react');
const Default = require('../layouts/Default');

class Login extends React.Component{
    render(){
        return(
            <Default>
                <div>
                    <form action="/user/signup" method="POST">
                        <fieldset>
                            <legend>New User</legend>
                            <label>USERNAME: <input type='text' name='username' required/></label>
                            <label>PASSWORD: <input type='password' name='password' required/></label>
                            <input type='submit' value='Create Account'/>
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Login;