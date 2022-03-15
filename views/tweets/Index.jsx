const React = require('react');
const Default = require('../layouts/Default');
class Index extends React.Component{
    render(){
        const {tweets, username} = this.props;
        return(
            <Default user={username}>
                <div>
                    {
                        tweets.map((tweet) => (
                            <div className='post'>
                                <div className='postBody'>
                                    <a className='postAuthor' href={`/user/${tweet.username}`}><h3>{tweet.username}</h3></a><br/>
                                    <a className='postContent' href={`/tweets/${tweet._id}`}>
                                        {tweet.content}<br/>
                                        <img src={tweet.img}/><br/>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Default>
        )
    }
}

module.exports = Index;