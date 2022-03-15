const React = require('react');
const Default = require('../layouts/DefaultEdit');

class Edit extends React.Component{
    render(){
        const {tweet} = this.props;
        return(
            <Default>
                <div className='creation'>
                    <div className='tweet'>
                        <form action={`/tweets/${tweet._id}/?_method=PUT`} method="POST">
                            <textarea className='tweetInput' name='content' defaultValue={tweet.content} placeholder="What's happening?"/><br/>
                            <input className='tweetImg' type='text' name='img' defaultValue={tweet.img} placeholder='Image URL'/><br/>
                            <input className='tweetBtn' type='submit' value='Update'/>
                        </form>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Edit;