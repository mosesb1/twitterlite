const React = require('react');
const Default = require('../layouts/Default');
class Show extends React.Component{
    render(){
        const {tweets, username} = this.props;

        return(
            <Default>
                <div>
                    {
                        tweets.map((tweet) => (
                            <div>
                                <a href={`/tweets/user/${tweet.username}`}>{tweet.username}</a><br/>
                                <a href={`/tweets/${tweet._id}`}>
                                    {tweet.content}<br/>
                                    <img src={tweet.img}/><br/>
                                </a>
                            </div>
                        ))
                    }
                    <a href='/user/logout'><button>Logout</button></a>
                </div>
            </Default>
        )
    }
}

module.exports = Show;