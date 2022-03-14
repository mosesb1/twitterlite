const React = require('react');
const Default = require('../layouts/Default');
const User = require('../../models/user');
class Show extends React.Component{
    render(){
        const {tweets, user, followers, username} = this.props;
        return(
            <Default>
                <div>
                    <a href={`/tweets/user/${user}`}>{user}</a><br/>
                    {
                        tweets.map((tweet) => (
                            <div>
                                <a href={`/tweets/${tweet._id}`}>
                                    {tweet.content}<br/>
                                    <img src={tweet.img}/><br/>
                                </a>
                            </div>
                        ))
                    }
                    <form action={`${user}?_method=PATCH`} method="POST">
                        <input type='submit' value={followers.includes(username) ? `Unfollow` : `Follow`}/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Show;