const React = require('react');
const Default = require('../layouts/Default');

class New extends React.Component{
    render(){
        return(
            <Default>
                <div className='creation'>
                    <div className='tweet'>
                        <form action='/tweets' method="POST">
                            <textarea className='tweetInput' name='content' placeholder="What's happening?"/><br/>
                            <input className='tweetImg' type='text' name='img' placeholder='Image URL'/><br/>
                            <input className='tweetBtn' type='submit' value='Tweet'/>
                        </form>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = New;