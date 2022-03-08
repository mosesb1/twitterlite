const React = require('react');

class Edit extends React.Component{
    render(){
        const {tweet} = this.props;
        return(
            <form action={`/home/${tweet._id}/?_method=PUT`} method="POST">
                <textarea name='content' defaultValue={tweet.content} placeholder="What's happening?"/><br/>
                <input type='submit' value='Update tweet'/>
            </form>
        )
    }
}

module.exports = Edit;