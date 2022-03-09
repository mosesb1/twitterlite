const React = require('react');

class Index extends React.Component{
    render(){
        return(
            <div>
                <a href='/user/signup'><button>Signup</button></a>
                <a href='/user/login'><button>Login</button></a>
            </div>
        )
    }
}

module.exports = Index;