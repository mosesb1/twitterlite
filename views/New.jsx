const React = require('react');

class New extends React.Component{
    render(){
        return(
            <form action='/home' method="POST">
                <textarea name='content' placeholder="What's happening?"/><br/>
                <input type='submit' value='Tweet'/>
            </form>
        )
    }
}

module.exports = New;