const React = require('react');
const Default = require('../layouts/Default');

class Edit extends React.Component{
    render(){
        const {tweet} = this.props;
        return(
            <Default>
                <form action={`/tweets/${tweet._id}/?_method=PUT`} method="POST">
                    <textarea name='content' defaultValue={tweet.content} placeholder="What's happening?"/><br/>
                    <input type='text' name='img' defaultValue={tweet.img} placeholder='Image URL'/><br/>
                    <input type='submit' value='Update tweet'/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;