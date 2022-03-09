const React = require('react');

class Show extends React.Component{
    render(){
        const {tweet, username} = this.props;
        return(
            <div>
                {tweet.username === username ? <div>
                <p>{tweet.content}</p>
                <a href={`/tweets/${tweet._id}/edit`}>Edit tweet</a>
                <form action={`${tweet._id}?_method=DELETE`} method="POST">
                    <input type='submit' value='Delete Tweet'/>
                </form> </div>: <p>{tweet.content}</p>}
            </div>
        )
    }
}

module.exports = Show;