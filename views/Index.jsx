const React = require('react');
const Default = require('./layouts/DefaultLogin');

class Index extends React.Component{
    render(){
        return(
            <Default>
                <div className='loginBtns'>
                    <a href='/user/signup'><button>Signup</button></a>
                    <a href='/user/login'><button>Login</button></a>
                </div>
            </Default>
        )
    }
}

module.exports = Index;