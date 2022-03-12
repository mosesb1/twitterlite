const React = require('react');
const Default = require('../layouts/Default');
class Index extends React.Component{
    render(){
        const {tweets, username} = this.props;
        return(
            <Default>
                <div>
                    <nav>
                        <a href='/tweets/new'>Create a tweet</a>
                    </nav>
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

module.exports = Index;