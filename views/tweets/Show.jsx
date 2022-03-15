const React = require('react');
const Default = require('../layouts/Default');

class Show extends React.Component{
    render(){
        const {tweet, username} = this.props;

        return(
            <Default>
                <div>
                    {tweet.username === username ? 
                    <div>
                        <div className='post'>
                            <div className='postBody'>
                                <a className='postAuthor' href={`/user/${tweet.username}`}><h3>{tweet.username}</h3></a><br/>
                                <a className='postContent' href={`/tweets/${tweet._id}`}>{tweet.content}
                                <img src={tweet.img}/></a><br/>
                            </div>
                        </div>
                        <div className='routeBtns'>
                            <a href={`/tweets/${tweet._id}/edit`}><button className='editBtn'>Edit tweet</button></a>
                            <form action={`${tweet._id}?_method=DELETE`} method="POST">
                                <input className='deleteBtn' type='submit' value='Delete Tweet'/>
                            </form> 
                        </div>
                    </div>: 
                    <div>
                        <div className='post'>
                            <div className='postBody'>
                                <a className='postAuthor' href={`/user/${tweet.username}`}><h3>{tweet.username}</h3></a><br/>
                                <a className='postContent' href={`/tweets/${tweet._id}`}>{tweet.content}
                                <img src={tweet.img}/></a><br/>
                            </div>
                        </div>
                        <form action={`${tweet._id}?_method=PATCH`} method="POST">
                            <input className={tweet.likes.includes(username) ? 'unlikeBtn' : 'likeBtn'} type='submit' value={tweet.likes.includes(username) ? `Unlike` : `Like`}/>
                        </form>
                    </div>}
                </div>
            </Default>
        )
    }
}

module.exports = Show;