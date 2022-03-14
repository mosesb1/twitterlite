const React = require('react');
const Default = require('../layouts/Default');

class Show extends React.Component{
    render(){
        const {tweet, username} = this.props;

        const helloWorld = () => {
            console.log('hello world');
        }

        return(
            <Default>
                <div>
                    {tweet.username === username ? 
                    <div>
                        <p>{tweet.content}</p>
                        <img src={tweet.img}/><br/>
                        <a href={`/tweets/${tweet._id}/edit`}>Edit tweet</a>
                        <form action={`${tweet._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='Delete Tweet'/>
                        </form> 
                    </div>: 
                    <div>
                        <a href={`/user/${tweet.username}`}>{tweet.username}</a>
                        <p>{tweet.content}</p>
                        <form action={`${tweet._id}?_method=PATCH`} method="POST">
                            <input type='submit' value={tweet.likes.includes(username) ? `Unlike` : `Like`}/>
                        </form>
                    </div>}
                </div>
            </Default>
        )
    }
}

module.exports = Show;