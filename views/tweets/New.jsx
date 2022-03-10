const React = require('react');
const Default = require('../layouts/Default');

class New extends React.Component{
    render(){
        return(
            <Default>
                <form action='/tweets' method="POST">
                    <textarea name='content' placeholder="What's happening?"/><br/>
                    <input type='submit' value='Tweet'/>
                </form>
            </Default>
        )
    }
}

module.exports = New;