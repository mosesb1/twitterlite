const React = require('react');
const Default = require('../layouts/Default');
class Show extends React.Component{
    render(){
        const {tweets, user, followers, username} = this.props;
        return(
            <Default>
                <div>
                    {
                        tweets.map((tweet) => (
                            <div className='post'>
                                <div className='postBody'>
                                    <a className='postAuthor' href={`/user/${user}`}><h3>{user}</h3></a><br/>
                                    <div className='postContent'>
                                        <a href={`/tweets/${tweet._id}`}>
                                            {tweet.content}<br/>
                                            <img src={tweet.img}/><br/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <form className='followForm' action={`${user}?_method=PATCH`} method="POST">
                        <input className={followers.includes(username) ? 'unfollowBtn' : 'followBtn'} type='submit' value={followers.includes(username) ? `Unfollow` : `Follow`}/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Show;