const React = require('react');

class Show extends React.Component{
    render(){
        const {tweet} = this.props;
        return(
            <div>
                <p>{tweet.content}</p>
                <a href={`/${tweet._id}/edit`}>Edit tweet</a>
                <form action={`${tweet._id}?_method=DELETE`} method="POST">
                    <input type='submit' value='Delete Tweet'/>
                </form>
            </div>
        )
    }
}

module.exports = Show;