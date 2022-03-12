const React = require('react');
const Default = require('../layouts/Default');

class Show extends React.Component{
    render(){
        const {tweet, username} = this.props;
        return(
            <Default>
                <div>
                    {tweet.username === username ? <div>
                    <p>{tweet.content}</p>
                    <img src={tweet.img}/><br/>
                    <a href={`/tweets/${tweet._id}/edit`}>Edit tweet</a>
                    <form action={`${tweet._id}?_method=DELETE`} method="POST">
                        <input type='submit' value='Delete Tweet'/>
                    </form> </div>: <p>{tweet.content}</p>}
                </div>
            </Default>
        )
    }
}

module.exports = Show;