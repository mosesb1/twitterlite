const React = require('react');

class Login extends React.Component{
    render(){
        return(
            <div>
                <form action='/user/login' method="POST">
                    <fieldset>
                        <legend>User Login</legend>
                        <label>USERNAME: <input type='text' name='username' required/></label>
                        <label>PASSWORD: <input type='password' name='password' required/></label>
                        <input type='submit' value='Login'/>
                    </fieldset>
                </form>
            </div>
        )
    }
}

module.exports = Login;